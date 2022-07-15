<?php

namespace Clockdown\Backend\App\Services\Database;

/**
 * Class responsible for handling the table schema.
 *
 * Operation performed: create, drop, alter.
 *
 */
class DatabaseTableSchema extends DatabaseTable {

    public function __construct( string $plugin_prefix, string $name ) {
        parent::__construct( $plugin_prefix, $name );
    }

    /**
     * Check if the table exists in the database.
     *
     * @return bool
     */
    public function table_exists(): bool {
        global $wpdb;

        $result = $wpdb->get_var( $wpdb->prepare( "SHOW TABLES LIKE %s", $this->table_fullname ) );

        if ( $result === null ) {
            return false;
        }

        return true;
    }

    /**
     * Get the prefix used by Wordpress.
     * It returns the prefix used **with the underscore**.
     *
     * @return string
     */
    public function get_wp_db_prefix(): string {
        global $wpdb;
        return $wpdb->prefix;
    }

    /**
     * Create the table if not exists.
     *
     * @param string $sql The SQL query to create the table.
     * @return boolean True if the table was created, false otherwise.
     */
    public function create_table( string $schema ): bool {

        global $wpdb;

        if ( $this->table_exists() ) {
            return false;
        }

        $sql = "CREATE TABLE `{$this->table_fullname}` (";
        $sql .= $schema;
        $sql .= ") $this->charset_collate;";

        return $wpdb->query( $sql );
    }

    /**
     * Drop table if exists.
     *
     * @param string $table_name OPTIONAL - The table name to drop.
     * @return bool True if table exists and was dropped, false otherwise.
     */
    public function drop_table(): bool {
        global $wpdb;

        if ( $this->table_fullname === null ) {
            return false;
        }

        return $wpdb->query( $wpdb->prepare( "DROP TABLE IF EXISTS `%s`;", $this->table_fullname ) );
    }

    /**
     * Alter the table.
     *
     * @param string $sql The SQL query to alter the table.
     * @return boolean True if the table was altered, false otherwise.
     */
    public function alter_table( string $sql ): bool {

        global $wpdb;

        if ( $this->table_exists() === false ) {
            return false;
        }

        return $wpdb->query( $sql );
    }

}
