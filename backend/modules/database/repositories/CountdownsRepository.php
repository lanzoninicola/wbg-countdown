<?php

namespace Clockdown\Backend\Modules\Database\Repositories;

use Clockdown\Backend\App\Common\DatabaseError;
use Clockdown\Backend\App\Services\DatabaseQueryService;

class CountdownsRepository {

    public $tables_prefix = 'wbg';

    private $table_name = 'countdowns';

    /**
     * Query service.
     *
     * @var DatabaseQueryService
     */
    private $query_service;

    /**
     * Singleton instance.
     *
     * @var CountdownsRepository
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsRepository
     */
    public static function singletone( DatabaseQueryService $query_service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsRepository( $query_service );
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
                name varchar(255) NOT NULL,
                description varchar(255) NOT NULL,
                created_at datetime NULL,
                updated_at datetime NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";

        return $this->query_service->create_table( $sql );

    }

    /**
     * Create the model and insert a record in the table countdowns.
     *
     * @param array $data
     * @return DatabaseSuccess|DatabaseError
     */
    public function insert( array $data ) {

        $countdown = array(
            'id'          => 0,
            'name'        => $data['name'],
            'description' => $data['description'],
            'created_at'  => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->insert_row( $countdown );

    }

    public function update( array $data, int $id ) {

        $updated_countdown = array(
            'name'        => $data['name'],
            'description' => $data['description'],
            'updated_at'  => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->update_row( $updated_countdown, array( 'id' => $id ) );

    }

    public function delete( int $id ) {

        return $this->query_service->delete_row( array( 'id' => $id ) );

    }

    /**
     * Get the list of countdowns.
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
     * Search a countdown by id.
     * If found return the DatabaseSuccess object that contains the Countdown model.
     * If not found return the DatabaseError object.
     *
     * @param int The id of the countdown to find.
     * @return DatabaseSuccess|DatabaseError
     */
    public function find_by_id( int $id ) {

        return $this->query_service->get_row( "id = {$id}" );

    }

}
