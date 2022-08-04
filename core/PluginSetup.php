<?php

namespace Clockdown\Core;

use Clockdown\App\Services\Database\DatabaseHelpers;

/**
 * Class responsible for the plugin setup.
 *
 * @method define_db_prefix()
 * @method define_schema()
 */
class PluginSetup {

    /**
     * Define the prefix for the plugin.
     *
     * @return void
     */
    public $analytics_server_api_url = 'http://localhost/bb-melhor-envio/wp-json/commerce/v1/analytics/installations';

    /**
     * The name of the plugin.
     *
     * @var string
     */
    protected $plugin_name;

    /**
     * The prefix to add to the plugin tables.
     *
     * @var string
     */
    protected $db_prefix;

    /**
     * The db version of the plugin.
     *
     * @var string
     */
    protected $db_version;

    /**
     * The id of the plugin.
     *
     * @var string
     */
    protected $plugin_id;

    /**
     * Array of SQL CREATE script that will be used
     * for create/update database via dbDelta() function.
     *
     * @var array
     */
    private $schema = array();

    /**
     * Array of the plugin tables with all prefixes.
     *
     * @var array
     */
    private $tables = array();

    /**
     * The options to be saved in the database.
     * Associative array with the name of the option as key and the value as value.
     *
     * @var array
     */
    private $options = array();

    /**
     * Instanciate the object responsible for the setup.
     *
     * @param string $plugin_name The name of the plugin. Costant defined in the plugin **[PLUGIN_NAME]_PLUGIN_NAME**.
     * @param string $db_prefix The prefix to add to the plugin tables. Costant defined in the plugin **[PLUGIN_NAME]_DB_PREFIX**.
     * @param string $db_version The db version of the plugin. Costant defined in the plugin **[PLUGIN_NAME]_PLUGIN_VERSION**.
     * @param string $plugin_id The id of the plugin. Costant defined in the plugin **[PLUGIN_NAME]_PLUGIN_ID**.
     */
    public function __construct(
        string $plugin_name,
        string $db_prefix,
        string $db_version,
        string $plugin_id
    ) {

        $this->plugin_name = strtolower( $plugin_name );
        $this->db_prefix   = $db_prefix;
        $this->db_version  = $db_version;
        $this->plugin_id   = $plugin_id;

        $this->define_plugin_options();

        $this->define_installation_id();

    }

    /**
     * Define the plugin options.
     * Save in the local array the options to be saved in the database.
     *
     * @return void
     */
    private function define_plugin_options() {
        $this->options = array(
            'db_tables_prefix'       => $this->db_prefix,
            'db_version'             => $this->db_version,
            'plugin_id'              => $this->plugin_id,
            'is_activation_tracked'  => false,
            'is_onboarding_required' => false,
        );
    }

    /**
     * Define the installation id.
     * Save in the local array the installation id option to be saved in the database.
     *
     * @return void
     */
    private function define_installation_id() {
        $installation_id_option = (bool) get_option( "{$this->plugin_name}_installation_id" );

        if ( $installation_id_option === false ) {
            $this->options['installation_id'] = DatabaseHelpers::generate_uuid();
        }

    }

    /**
     * Set the array of SQL CREATE script that will be used
     * for create/update database via dbDelta() function.
     *
     * PRIMARY KEY must be followed by TWO SPACES then
     * the open parenthesis then the field name and a closing parenthesis.
     *
     * KEY must be followed by a SINGLE SPACE then the key name then a space
     * then open parenthesis with the field name then a closed parenthesis.
     *
     * Note for the CREATE TABLE statement:
     * - The table name must be enclosed in backticks.
     * - The table name must be a placeholder like this %table_name% (it is replaced by the key of array).
     * - The charset collation a placeholder like this %charset_collate% (it is replaced by the charset collation).
     *
     * @param array $tables Associative array( table_name => SQL CREATE script ).
     * @return void
     */
    public function define_db_schema( array $tables ): void {
        $charset_collate = DatabaseHelpers::get_charset_collate();
        $wp_prefix       = DatabaseHelpers::get_wp_db_prefix();

        if ( empty( $tables ) ) {
            return;
        }

        foreach ( $tables as $name => $sql ) {

            $table_name = "{$wp_prefix}{$this->db_prefix}_{$name}";

            $sql            = str_replace( '%table_name%', "{$wp_prefix}{$this->db_prefix}_{$name}", $sql );
            $sql            = str_replace( '%charset_collate%', $charset_collate, $sql );
            $this->schema[] = $sql;
            $this->tables[] = $table_name;
        }

    }

    /**
     * Add the options to the database.
     *
     * @return void
     */
    public function add_options(): void {

        foreach ( $this->options as $option_name => $option_value ) {
            add_option( "{$this->plugin_name}_{$option_name}", $option_value );
        }

    }

    /**
     * Remove the options from the database.
     *
     * @return void
     */
    public function remove_options(): void {

        foreach ( $this->options as $option_name => $_ ) {
            delete_option( "{$this->plugin_name}_{$option_name}" );
        }

    }

    /**
     * Create/update database tables via dbDelta() function.
     *
     * @return array
     */
    private function sync_db(): array{

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        return dbDelta( $this->schema );
    }

    /**
     * Remove database tables.
     *
     * @return void
     */
    private function remove_db_tables() {

        global $wpdb;

        foreach ( $this->tables as $table ) {
            $wpdb->query( "DROP TABLE IF EXISTS {$table}" );
        }

    }

    /**
     * Send the installation data to the server.
     * @return void
     */
    private function send_activation_data() {

        $is_activation_tracked = (bool) get_option( "{$this->plugin_name}_activation_tracked" );

        if ( $is_activation_tracked ) {
            return;
        }

        $installation_id = get_option( "{$this->plugin_name}_installation_id" );
        $site_url        = get_site_url();
        $site_language   = get_bloginfo( 'language' );
        $site_timezone   = get_option( 'timezone_string' );

        if ( empty( $site_timezone ) ) {
            $site_timezone = 'UTC';
        }

        $response = wp_remote_post(
            $this->analytics_server_api_url,
            array(
                'body' => array(
                    'product_id'      => $this->plugin_id,
                    'installation_id' => $installation_id,
                    'site_url'        => $site_url,
                    'site_language'   => $site_language,
                    'site_timezone'   => $site_timezone,
                ),
            )
        );

        if ( is_wp_error( $response ) ) {
            add_option( "{$this->plugin_name}_activation_tracked", false );
            return;
        }

        add_option( "{$this->plugin_name}_activation_tracked", true );

    }

    /**
     * Add the tables to the database.
     *
     * @return array The result of the dbDelta() function.
     */
    public function install(): array{

        $this->add_options();
        $this->send_activation_data();
        $result = $this->sync_db();

        return $result;

    }

    public function uninstall() {
        $this->remove_options();
        $this->remove_db_tables();
    }

}
