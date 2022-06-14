<?php

namespace WBGCountdown\Modules\Api\Repositories;

use WBGCountdown\Modules\Database\CountdownsSettingsQueryService;

class CountdownsSettingsRepository {

    /**
     * Query service.
     *
     * @var CountdownsSettingsQueryService
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
    public static function get_instance( CountdownsSettingsQueryService $query_service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsSettingsRepository( $query_service );
        }

        return self::$instance;
    }

    public function __construct( CountdownsSettingsQueryService $query_service ) {
        $this->query_service = $query_service;
    }

    public function find_all() {

        return 'urra from repository';
    }

    public function find_by_id( $id ) {
        return $this->query_service->get_by_id( $id );
    }

    public function create( $id ) {
        return 'create';
    }

    public function update( $id ) {
        return 'update';
    }

    public function delete( $id ) {
        return 'delete';
    }

}
