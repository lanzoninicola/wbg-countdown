<?php

namespace Clockdown\Services;

use Clockdown\Common\DatabaseError;
use Clockdown\Common\DatabaseResponse;

class DatabaseQueryService {

    /**
     * Prefix assigned to the plugin database table
     * @var string
     */
    private $tables_prefix = null;

    /**
     * The name of table without prefixes.
     *
     * @var string
     */
    private $table_name = null;

    /**
     * Set the prefix choosed for the tables
     *
     * @return void
     */
    public function set_tables_prefix( string $desired_tables_prefix ): void {
        $this->tables_prefix = $desired_tables_prefix;
    }

    /**
     * Returns the prefix choosed for the tables
     *
     * @return string
     */
    public function get_tables_prefix(): string {
        return $this->tables_prefix;
    }

    /**
     * Let the DatabaseQueryService object know the table name where to operate.
     *
     * @param string $table_name The table name (choose a name without prefixes).
     * @return void
     * @throws \Exception If a custom prefix is not set.
     */
    public function set_table_name( string $desired_table_name ): void {
        global $wpdb;

        if ( !$this->tables_prefix ) {
            throw new \Exception( 'Tables prefix not set. Set the prefix first with the "set_tables_prefix" method.' );
        }

        $this->table_name = "{$wpdb->base_prefix}{$this->tables_prefix}_{$desired_table_name}";

    }

    /**
     * Returns the table_name with prefixes.
     *
     * @return string
     */
    public function get_table_name() {
        return $this->table_name;
    }

    /**
     * Check if the table exists.
     *
     * @return boolean
     */
    public function table_exists(): bool {
        global $wpdb;

        return $wpdb->get_var( $wpdb->prepare( "SHOW TABLES LIKE %s", $this->table_name ) ) === $this->table_name;
    }

    /**
     * Get the charset collate of table.
     *
     * @return string
     */
    public function get_charset_collate(): string {
        global $wpdb;
        return $wpdb->get_charset_collate();
    }

    /**
     * Create the table.
     *
     * @return boolean
     */
    public function create_table( string $sql ): bool {

        global $wpdb;

        return $wpdb->query( $sql );
    }

    /**
     * Drop table if exists.
     *
     * @return bool
     */
    public function drop_table(): bool {
        global $wpdb;

        return $wpdb->query( $wpdb->prepare( "DROP TABLE IF EXISTS `%s`;", $this->table_name ) );
    }

    /**
     * Insert a row.
     *
     * Use the identity operator (===) to check for errors: (e.g., false === $result),
     * and whether any rows were affected (e.g., 0 === $result).
     *
     * @return DatabaseSuccess|DatabaseError
     */
    public function insert_row( array $data ) {

        global $wpdb;

        $result = $wpdb->insert(
            $this->table_name,
            $data
        );

        $id_generated = $wpdb->insert_id;

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return DatabaseResponse::error(
                array(
                    'message' => 'Insert operation failed. Query returns an error.',
                )
            );
        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 ) {
            return DatabaseResponse::warning(
                array(
                    'message' => 'No rows were affected' )
            );
        }

        return DatabaseResponse::success(
            array(
                'message' => 'Row inserted successfully.',
                'data'    => array( 'id' => $id_generated ),
            )
        );

    }

    /**
     * Update a row.
     *
     * @return DatabaseSuccess|DatabaseError
     */
    public function update_row( array $data, array $where ) {

        global $wpdb;

        $result = $wpdb->update(
            $this->table_name,
            $data,
            $where
        );

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return DatabaseResponse::error(
                array(
                    'message' => 'Update operation failed. Query returns an error.',
                )
            );
        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 ) {
            return DatabaseResponse::warning(
                array(
                    'message' => 'No rows were affected' )
            );
        }

        return DatabaseResponse::success();

    }

    /**
     * Delete a row.
     *
     * @return DatabaseSuccess|DatabaseError
     */
    public function delete_row( array $where ) {

        global $wpdb;

        $result = $wpdb->delete(
            $this->table_name,
            $where
        );

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return DatabaseResponse::error(
                array(
                    'message' => 'Delete operation failed. Query returns an error.',
                )
            );
        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 ) {
            return DatabaseResponse::warning(
                array(
                    'message' => 'No rows were affected' )
            );
        }

        return DatabaseResponse::success();

    }

    /**
     * Get a row.
     *
     * Returns null if no result is found,
     *
     * @return DatabaseSuccess|DatabaseError
     */
    public function get_row( string $where ) {

        global $wpdb;

        $table_name = $this->table_name;

        $result = $wpdb->get_row(
            $wpdb->prepare( "SELECT * FROM `$table_name` WHERE $where" ),
            ARRAY_A
        );

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return DatabaseResponse::error(
                array(
                    'message' => 'Get all rows operation failed. Query returns an error.',
                )
            );
        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 || $result === null ) {
            return DatabaseResponse::warning(
                array(
                    'message' => 'No rows founds',
                )
            );
        }

        return DatabaseResponse::success(
            array( 'data' => $result )
        );

    }

    /**
     * Get all rows.
     *
     * @return DatabaseSuccess|DatabaseError
     */
    public function get_all_rows() {

        global $wpdb;

        $table_name = $this->table_name;

        $result = $wpdb->get_results(
            $wpdb->prepare( "SELECT * FROM `$table_name`" ),
            ARRAY_A
        );

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return DatabaseResponse::error(
                array(
                    'message' => 'Get all rows operation failed. Query returns an error.',
                )
            );
        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 ) {
            return DatabaseResponse::warning(
                array(
                    'data'    => array(),
                    'message' => 'No rows founds' )
            );
        }

        return DatabaseResponse::success(
            array( 'data' => $result )
        );

    }

}
