<?php

namespace WBGCountdown\Modules\Api\Controllers;

use WBGCountdown\Modules\Api\Repositories\CountdownsRepository;

class CountdownsController {

    /**
     * Repository
     *
     * @var CountdownsRepository
     */
    public $repository;

    /**
     * Singleton instance.
     *
     * @var CountdownsController
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsController
     */
    public static function get_instance( CountdownsRepository $repository ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsController( $repository );
        }

        return self::$instance;
    }

    public function __construct( CountdownsRepository $repository ) {
        $this->repository = $repository;
    }

    public function findAll() {

        return rest_ensure_response( $this->repository->findAll() );
    }

    public function findById( $id ) {
        return 'findbyid';
    }

    public function save( $request ) {

        var_dump( $request['name'] );

        return 'save';
    }

    public function delete( $id ) {
        return 'delete';
    }

    public function create( $id ) {
        return 'create';
    }

    public function update( $id ) {
        return 'update';
    }

}
