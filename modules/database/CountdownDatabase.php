<?php

namespace WBGCountdown\Modules\Database;

use WBGCountdown\Services\DatabaseService;

class CountdownDatabase extends DatabaseService {

    /**
     * Prefix assigned to the plugin database table
     * @var string
     */
    public $tables_prefix = 'wbg';

    /**
     * Singleton instance.
     *
     * @var CountdownDatabase
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownDatabase
     */
    public static function get_instance() {

        if ( is_null( self::$instance ) ) {
            self::$instance = new CountdownDatabase();
        }

        return self::$instance;
    }

    /**
     * Creates the table countdowns.
     *
     * @return boolean True if the operation finished with success, false some error occured.
     *
     * //TODO: Handling error cases.
     */
    public function create_table_countdowns() {

        if ( $this->table_exists( 'countdowns' ) ) {
            return true;
        }

        global $wpdb;

        $table_name = $this->get_table_name( 'countdowns' );

        $charset_collate = $this->get_charset_collate();

        $sql = "CREATE TABLE `{$table_name}` (
                id INT NOT NULL AUTO_INCREMENT,
                name varchar(255) NOT NULL,
                description varchar(255) NOT NULL,
                created_at datetime NOT NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";

        $wpdb->query( $sql );

    }

    public function drop_table_countdowns() {
        $this->drop_table( 'countdowns' );

    }

    /**
     * Creates the table countdowns_settings.
     *
     * @return boolean True if the operation finished with success, false some error occured.
     * //TODO: Handling error cases.
     */
    public function create_table_countdowns_settings() {

        if ( $this->table_exists( 'countdowns_settings' ) ) {
            return true;
        }

        global $wpdb;

        $table_name = $this->get_table_name( 'countdowns_settings' );

        $charset_collate = $this->get_charset_collate();

        $sql = "CREATE TABLE `{$table_name}` (
                id INT NOT NULL AUTO_INCREMENT,
                countdown_id varchar(255) NOT NULL,
                settings json NOT NULL,
                created_at datetime NOT NULL,
                PRIMARY KEY  (id)
                -- INDEX countdown_id_idx (countdown_id ASC) VISIBLE,
                ) $charset_collate;";

        $wpdb->query( $sql );

    }

    public function drop_table_countdowns_settings() {
        $this->drop_table( 'countdowns_settings' );

    }

}
