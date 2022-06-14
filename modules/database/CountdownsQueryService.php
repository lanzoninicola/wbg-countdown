<?php

namespace WBGCountdown\Modules\Database;

use WBGCountdown\Modules\Api\Models\CountdownModel;
use WBGCountdown\Services\DatabaseQueryService;

class CountdownsQueryService extends DatabaseQueryService {

    public $tables_prefix = 'wbg';

    protected $table_name = 'countdowns';

    /**
     * Singleton instance.
     *
     * @var CountdownsQueryService
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsQueryService
     */
    public static function get_instance() {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsQueryService();
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
    public function create_table() {

        if ( $this->table_exists( $this->table_name ) ) {
            return true;
        }

        global $wpdb;

        $table_name = $this->get_table_name( $this->table_name );

        $charset_collate = $this->get_charset_collate();

        $sql = "CREATE TABLE `{$table_name}` (
                id INT NOT NULL AUTO_INCREMENT,
                name varchar(255) NOT NULL,
                description varchar(255) NOT NULL,
                created_at datetime NOT NULL,
                updated_at datetime NOT NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";

        $wpdb->query( $sql );

    }

    /**
     * Drop the table countdowns
     *
     * @return boolean
     */
    public function drop(): bool {

        return $this->drop_table( $this->table_name );

    }

    /**
     * Update a record in the table countdowns.
     *
     * @param integer $id
     * @param CountdownModel $countdown The countdown object updated.
     * @return bool True if the operation finished with success, false some error occured.
     */
    public function update( int $id, CountdownModel $countdown ): bool {

        return $this->update_row( $this->table_name, $countdown->to_array( array( 'id' ) ), array( 'id' => $id ) );

    }

    /**
     * Insert a record in the table countdowns.
     * @param CountdownModel $countdown
     * @return array array( 'id' => id_generated, 'result' => result ) .
     */
    public function insert( CountdownModel $countdown ): array{

        return $this->insert_row( $this->table_name, $countdown->to_array( array( 'id' ) ) );

    }

    /**
     * Delete a record in the table countdowns.
     * @param integer $id
     * @return bool True if the operation finished with success, false some error occured.
     */
    public function delete( int $id ): bool {

        return $this->delete_row( $this->table_name, array( 'id' => $id ) );

    }

    /**
     * Get a record from the table countdowns.
     * @param integer $id
     * @return array|null The record found, null if not found.
     */
    public function get_by_id( int $id ): ?array{

        return $this->get_row( $this->table_name, "id = {$id};" );
    }

    /**
     * Get all records from the table countdowns.
     * @return array The records found.
     */
    public function get_all(): array{

        return $this->get_all_rows( $this->table_name );
    }

}
