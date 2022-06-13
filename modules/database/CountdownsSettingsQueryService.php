<?php

namespace WBGCountdown\Modules\Database;

use WBGCountdown\Services\DatabaseQueryService;

class CountdownsSettingsQueryService extends DatabaseQueryService {

    /**
     * Prefix assigned to the plugin database table
     * @var string
     */
    public $tables_prefix = 'wbg';

    private $table_name = 'countdowns_settings';

    /**
     * Singleton instance.
     *
     * @var CountdownsSettingsQueryService
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsSettingsQueryService
     */
    public static function get_instance() {

        if ( is_null( self::$instance ) ) {
            self::$instance = new CountdownsSettingsQueryService();
        }

        return self::$instance;
    }

    /**
     * Creates the table countdowns_settings.
     *
     * @return boolean True if the operation finished with success, false some error occured.
     * //TODO: Handling error cases.
     */
    public function create_table() {

        if ( $this->table_exists( $this->table_name ) ) {
            return true;
        }

        global $wpdb;

        $table_name = $this->get_table_name( $this->table_name );

        $charset_collate = $this->get_charset_collate();

        $sql = "CREATE TABLE `{$table_name}` (
                id INT NOT NULL AUTO_INCREMENT,
                countdown_id varchar(255) NOT NULL,
                settings json NOT NULL,
                created_at datetime NOT NULL,
                updated_at datetime NOT NULL,
                PRIMARY KEY  (id)
                -- INDEX countdown_id_idx (countdown_id ASC) VISIBLE,
                ) $charset_collate;";

        $wpdb->query( $sql );

    }

    public function drop() {
        $this->drop_table( $this->table_name );

    }

}
