<?php

namespace WBGCountdown\Modules\Api\Repositories;

use WBGCountdown\Modules\Api\Dtos\NewCountdownDTO;
use WBGCountdown\Modules\Api\Models\CountdownModel;
use WBGCountdown\Modules\Database\CountdownsQueryService;

class CountdownsRepository {

    /**
     * Query service.
     *
     * @var CountdownsQueryService
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
    public static function get_instance( CountdownsQueryService $query_service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsRepository( $query_service );
        }

        return self::$instance;
    }

    public function __construct( CountdownsQueryService $query_service ) {
        $this->query_service = $query_service;
    }

    public function create_table() {

    }

    public function find_all() {

        return $this->query_service->get_all();
    }

    public function find_by_id( $id ) {

        return $this->query_service->get_by_id( $id );
    }

    /**
     * Create the model and insert a record in the table countdowns.
     *
     * @param NewCountdownDTO $data
     * @return array array( 'id' => id_generated, 'result' => result ) .
     */
    public function insert( NewCountdownDTO $data ): array{

        $countdown = new CountdownModel( 0, $data->get_name(), $data->get_description() );

        return $this->query_service->insert( $countdown );

    }

    public function update( $id ) {
        return 'update';
    }

    public function delete( $id ) {
        return 'delete';
    }

}
