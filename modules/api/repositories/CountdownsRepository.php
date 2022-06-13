<?php

namespace WBGCountdown\Modules\Api\Repositories;

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

        if (  self::$instance === null ) {
            self::$instance = new CountdownsRepository( $query_service );
        }

        return self::$instance;
    }

    public function __construct( CountdownsQueryService $query_service ) {
        $this->query_service = $query_service;
    }

    public function findAll() {

        return $this->query_service->getAll();
    }

    public function findById( $id ) {
        return 'findbyid';
    }

    public function create( $data ) {

        return 'create';
    }

    public function update( $id ) {
        return 'update';
    }

    public function delete( $id ) {
        return 'delete';
    }

}
