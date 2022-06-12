<?php

namespace WBGCountdown\Services;

abstract class DatabaseService {

    /**
     * Prefix assigned to the plugin database table
     * @var string
     */
    protected $tables_prefix = null;

    /**
     * Returns the table name following the Wordpress standards adding the base prefix and the custom prefix.
     *
     * @param string $table_name The table name (choose a name without prefixes).
     * @return mixed
     * @throws \Exception If a custom prefix is not set.
     */
    protected function get_table_name( string $desired_table_name ) {
        global $wpdb;

        if ( !$this->tables_prefix ) {
            throw new \Exception( 'Tables prefix not set. Add a property called "tables_prefix" in your class and define a prefix' );
        }

        return "{$wpdb->base_prefix}{$this->tables_prefix}_{$desired_table_name}";
    }

    /**
     * Returns the prefix choosed for the tables
     *
     * @return string
     */
    public function get_tables_prefix() {
        return $this->tables_prefix;
    }

    /**
     * Check if the table exists.
     *
     * @return boolean
     */
    public function table_exists( string $table_name ) {
        global $wpdb;

        $table_name = $this->get_table_name( $table_name );

        return $wpdb->get_var( "SHOW TABLES LIKE '$table_name'" ) === $table_name;
    }

    /**
     * Get the charset collate of table.
     *
     * @return string
     */
    public function get_charset_collate() {
        global $wpdb;
        return $wpdb->get_charset_collate();
    }

    /**
     * Drop table if exists.
     *
     * @return void
     */
    public function drop_table( string $table_name ) {
        global $wpdb;

        $table_name = $this->get_table_name( $table_name );

        $sql = "DROP TABLE IF EXISTS `{$table_name}`;";

        $wpdb->query( $sql );
    }

}
