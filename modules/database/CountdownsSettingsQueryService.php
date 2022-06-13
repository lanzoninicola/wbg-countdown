<?php

namespace WBGCountdown\Modules\Database;

use WBGCountdown\Modules\Api\Models\CountdownSettings;
use WBGCountdown\Services\DatabaseQueryService;

class CountdownsSettingsQueryService extends DatabaseQueryService {

    /**
     * Prefix assigned to the plugin database table
     * @var string
     */
    public $tables_prefix = 'wbg';

    protected $table_name = 'countdowns_settings';

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

        if ( self::$instance === null ) {
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

        $wpdb->query( $wpdb->prepare( $sql ) );

    }

    /**
     * Drop the table countdowns_settings
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
     * @param CountdownSettings $countdown_settings The countdown object updated.
     * @return bool True if the operation finished with success, false some error occured.
     */
    public function update( int $id, CountdownSettings $countdown_settings ): bool {

        return $this->update_row( $this->table_name, $countdown_settings->to_array( array( 'id' ) ), array( 'id' => $id ) );

    }

    /**
     * Insert a record in the table countdowns.
     * @param CountdownSettings $countdown_settings
     * @return array array( 'id' => id_generated, 'result' => result ) .
     */
    public function insert( CountdownSettings $countdown_settings ): array{

        return $this->insert_row( $this->table_name, $countdown_settings->to_array( array( 'id' ) ) );

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
    public function getById( int $id ): ?array{

        return $this->get_row( $this->table_name, array( 'id' => $id ) );
    }

    /**
     * Get all records from the table countdowns.
     * @return array The records found.
     */
    public function getAll(): array{

        return $this->get_all_rows( $this->table_name );
    }

}
