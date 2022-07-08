<?php

namespace Clockdown\Backend\Modules\Database\Repositories;

use Clockdown\Backend\App\Services\DatabaseQueryService;

class CountdownsSettingsRepository {

    public $tables_prefix = 'wbg';

    private $table_name = 'countdowns_settings';

    /**
     * Query service.
     *
     * @var DatabaseQueryService
     */
    private $query_service;

    /**
     * Singleton instance.
     *
     * @var CountdownsSettingsRepository
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsSettingsRepository
     */
    public static function get_instance( DatabaseQueryService $query_service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsSettingsRepository( $query_service );
        }

        return self::$instance;
    }

    public function __construct( DatabaseQueryService $query_service ) {
        $this->query_service = $query_service;
        // setup query service
        $this->query_service->set_tables_prefix( $this->tables_prefix );
        $this->query_service->set_table_name( $this->table_name );
    }

    public function create_table() {

        if ( $this->query_service->table_exists() ) {
            return true;
        }

        $charset_collate = $this->query_service->get_charset_collate();
        $table_name      = $this->query_service->get_table_name();

        $sql = "CREATE TABLE `{$table_name}` (
                id INT NOT NULL AUTO_INCREMENT,
                countdown_id varchar(255) NOT NULL,
                settings LONGTEXT NULL,
                created_at datetime NULL,
                updated_at datetime NULL,
                PRIMARY KEY  (id)
                -- INDEX countdown_id_idx (countdown_id ASC) VISIBLE,
                ) $charset_collate;";

        return $this->query_service->create_table( $sql );

    }

    /**
     * Insert a record in the table countdowns_settings.
     *
     * @param array $data
     * @return DatabaseSuccess|DatabaseError
     */
    public function insert( array $data ) {

        $countdown_settings = array(
            'id'           => 0,
            'countdown_id' => $data['countdown_id'],
            'settings'     => $data['settings'],
            'created_at'   => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->insert_row( $countdown_settings );

    }

    public function update( array $data, int $id ) {
        $updated_countdown = array(
            'settings'   => $data['settings'],
            'updated_at' => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->update_row( $updated_countdown, array( 'countdown_id' => $id ) );
    }

    public function delete( int $id ) {

        return $this->query_service->delete_row( array( 'countdown_id' => $id ) );
    }

    /**
     * Get the list of countdowns_settings.
     * If found return the DatabaseSuccess object that contains the Countdown model.
     * If not found return the DatabaseError object.
     *
     * @param int The id of the countdown to find.
     * @return DatabaseSuccess|DatabaseError
     */
    public function find_all() {

        return $this->query_service->get_all_rows();
    }

    /**
     * Search a countdowns_settings by id.
     * If found return the DatabaseSuccess object that contains the Countdown model.
     * If not found return the DatabaseError object.
     *
     * @param int The id of the countdown to find.
     * @return DatabaseSuccess|DatabaseError
     */
    public function find_by_id( int $id ) {

        return $this->query_service->get_row( "countdown_id = {$id}" );

    }

}
