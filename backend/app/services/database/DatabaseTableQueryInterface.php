<?php

namespace Clockdown\Backend\App\Services\Database;

use Clockdown\Backend\App\Services\Database\DatabaseResponse;

interface DatabaseTableQueryInterface {

    /**
     * Insert a row.
     *
     * Use the identity operator (===) to check for errors: (e.g., false === $result),
     * and whether any rows were affected (e.g., 0 === $result).
     *
     * @return DatabaseResponse
     */
    public function insert_row( array $data ): DatabaseResponse;

    /**
     * Update a row.
     *
     * @return DatabaseResponse
     */
    public function update_row( array $data, array $where ): DatabaseResponse;

    /**
     * Delete a row.
     *
     * @return DatabaseResponse
     */
    public function delete_row( array $where ): DatabaseResponse;

    /**
     * Get a row.
     *
     * Returns null if no result is found,
     *
     * @return DatabaseResponse
     */
    public function get_row( string $where ): DatabaseResponse;

    /**
     * Get all rows.
     *
     * @return DatabaseResponse
     */
    public function get_all_rows(): DatabaseResponse;

}