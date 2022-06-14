<?php

namespace WBGCountdown\Modules\Api\Controllers;

use WBGCountdown\Modules\Api\Dtos\NewCountdownDTO;
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

    public function find_all() {

        return rest_ensure_response( $this->repository->find_all() );
    }

    public function find_by_id( \WP_REST_Request $request ) {

        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return rest_ensure_response(
                new \WP_Error( 'rest_invalid_param',
                    __( 'Invalid countdown id.', 'wbg-countdown' ),
                    array( 'status' => 400 ) )
            );
        }

        return rest_ensure_response( $this->repository->find_by_id( $countdown_id ) );
    }

    // TODO: handling response
    public function create( \WP_REST_Request $request ) {

        $dto = new NewCountdownDTO(
            $request->get_param( 'name' ),
            $request->get_param( 'description' )
        );

        $result = $this->repository->insert( $dto );

        return rest_ensure_response( $result );
    }

    public function update( $id ) {
        return 'update';
    }

    public function delete( $id ) {
        return 'delete';
    }

}
