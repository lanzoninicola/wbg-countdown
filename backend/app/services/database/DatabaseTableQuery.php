<?php

namespace Clockdown\Backend\App\Services\Database;

/**
 * Class responsible for querying the table passed in the constructor.
 *
 */
class DatabaseTableQuery extends DatabaseTable implements DatabaseTableQueryInterface {

    public function __construct( string $plugin_prefix, string $name ) {
        parent::__construct( $plugin_prefix, $name );
    }

    /**
     * Insert a row.
     *
     * Use the identity operator (===) to check for errors: (e.g., false === $result),
     * and whether any rows were affected (e.g., 0 === $result).
     *
     * @return DatabaseResponse
     */
    public function insert_row( array $data ): DatabaseResponse {

        global $wpdb;

        $result = $wpdb->insert(
            $this->table_fullname,
            $data
        );

        $id_generated = $wpdb->insert_id;

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return new DatabaseResponseError( 'Insert operation failed. Query returns an error.' );
        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 ) {
            return new DatabaseResponseWarning( 'No rows were affected' );
        }

        return new DatabaseResponseSuccess(
            'Row inserted successfully.',
            array( 'id' => $id_generated ),
        );

    }

    /**
     * Update a row.
     *
     * @return DatabaseResponse
     */
    public function update_row( array $data, array $where ): DatabaseResponse {

        global $wpdb;

        $result = $wpdb->update(
            $this->table_fullname,
            $data,
            $where
        );

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return new DatabaseResponseError( 'Update operation failed. Query returns an error.' );
        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 ) {
            return new DatabaseResponseWarning( 'No rows were affected' );
        }

        return new DatabaseResponseSuccess( 'Row updated successfully.' );

    }

    /**
     * Delete a row.
     *
     * @return DatabaseResponse
     */
    public function delete_row( array $where ): DatabaseResponse {

        global $wpdb;

        $result = $wpdb->delete(
            $this->table_fullname,
            $where
        );

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return new DatabaseResponseError( 'Delete operation failed. Query returns an error.' );

        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 ) {
            return new DatabaseResponseWarning( 'No rows were affected' );
        }

        return new DatabaseResponseSuccess( 'Row deleted successfully.' );

    }

    /**
     * Get a row.
     *
     * @return DatabaseResponse
     */
    public function get_row( string $where ): DatabaseResponse {

        global $wpdb;

        $result = $wpdb->get_row(
            $wpdb->prepare( "SELECT * FROM `$this->table_fullname` WHERE $where" ),
            ARRAY_A
        );

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return new DatabaseResponseError( 'Get row operation failed. Query returns an error.' );
        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 || $result === null ) {
            return new DatabaseResponseWarning( 'No rows were affected' );
        }

        return new DatabaseResponseSuccess( 'Row retrieved successfully.', $result );

    }

    /**
     * Get all rows.
     *
     * @return DatabaseResponse
     */
    public function get_all_rows(): DatabaseResponse {

        global $wpdb;

        $result = $wpdb->get_results(
            $wpdb->prepare( "SELECT * FROM `$this->table_fullname`" ),
            ARRAY_A
        );

        /**
         * query returns an error
         */

        if ( $result === false ) {
            return new DatabaseResponseError( 'Get all rows operation failed. Query returns an error.' );

        }

        /**
         * no rows were affected
         */

        if ( is_array( $result ) && count( $result ) === 0 ) {
            return new DatabaseResponseWarning( 'No rows were affected' );
        }

        return new DatabaseResponseSuccess( 'All rows retrieved successfully.', $result );

    }

}
