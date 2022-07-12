<?php

namespace Clockdown\Backend\Modules\Api\V1\Controllers;

use Clockdown\Backend\App\Common\DatabaseError;
use Clockdown\Backend\Modules\Database\Repositories\CountdownsRepository;

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

    public function create( \WP_REST_Request $request ) {

        $name_param        = $request->get_param( 'name' );
        $description_param = $request->get_param( 'description' );

        if ( empty( $name_param ) || $name_param === null ) {
            return new \WP_Error( 'missing_parameters', 'Missing Name parameter', array( 'status' => 400 ) );
        }

        if ( empty( $description_param ) || $description_param === null ) {
            return new \WP_Error( 'missing_parameters', 'Missing Description parameters', array( 'status' => 400 ) );
        }

        $new_countdown = array(
            'name'        => sanitize_text_field( $name_param ),
            'description' => sanitize_text_field( $description_param ),
        );

        $result = $this->repository->insert( $new_countdown );

        if ( $result instanceof DatabaseError ) {
            return new \WP_Error( $result->get_code(), $result->get_data(), array( 'status' => 500 ) );
        }

        return rest_ensure_response( $result->to_array() );
    }

    public function update( \WP_REST_Request $request ) {
        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return new \WP_Error( 'rest_invalid_param',
                __( 'Invalid countdown id.', 'clockdown' ),
                array( 'status' => 400 ) );
        }

        $name_param        = $request->get_param( 'name' );
        $description_param = $request->get_param( 'description' );

        if ( empty( $name_param ) || $name_param === null ) {
            return new \WP_Error( 'missing_parameters', 'Missing Name parameter', array( 'status' => 400 ) );
        }

        if ( empty( $description_param ) || $description_param === null ) {
            return new \WP_Error( 'missing_parameters', 'Missing Description parameters', array( 'status' => 400 ) );
        }

        $next_countdown = array(
            'name'        => sanitize_text_field( $name_param ),
            'description' => sanitize_text_field( $description_param ),
        );

        $result = $this->repository->update( $next_countdown, $countdown_id );

        if ( $result instanceof DatabaseError ) {
            return new \WP_Error( $result->get_code(), $result->get_data(), array( 'status' => 500 ) );
        }

        return rest_ensure_response( $result->to_array() );
    }

    public function delete( \WP_REST_Request $request ) {
        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return new \WP_Error( 'rest_invalid_param',
                __( 'Invalid countdown id.', 'clockdown' ),
                array( 'status' => 400 ) );
        }

        $result = $this->repository->delete( $countdown_id );

        if ( $result instanceof DatabaseError ) {
            return new \WP_Error( $result->get_code(), $result->get_data(), array( 'status' => 500 ) );
        }

        return rest_ensure_response( $result->to_array() );

    }

    public function find_all() {

        $result = $this->repository->find_all();

        if ( $result instanceof DatabaseError ) {
            return new \WP_Error( $result->get_code(), $result->get_data(), array( 'status' => 500 ) );
        }

        return rest_ensure_response( $result->to_array() );
    }

    public function find_by_id( \WP_REST_Request $request ) {

        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return new \WP_Error(
                'rest_invalid_param',
                __( 'Invalid countdown id.',
                    'clockdown' ),
                array( 'status' => 400 ) );
        }

        $result = $this->repository->find_by_id( $countdown_id );

        if ( $result instanceof DatabaseError ) {
            return new \WP_Error( $result->get_code(), $result->get_data(), array( 'status' => 500 ) );
        }

        return rest_ensure_response( $result->to_array() );

    }

}
