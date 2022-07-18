<?php

namespace Clockdown\Backend\Modules\Api\V1\Controllers;

use Clockdown\Backend\App\Services\Database\DatabaseResponseEmpty;
use Clockdown\Backend\App\Services\Database\DatabaseResponseError;
use Clockdown\Backend\App\Services\Database\DatabaseResponseNotAffected;
use Clockdown\Backend\App\Services\Database\DatabaseResponseNotFound;
use Clockdown\Backend\App\Services\RestApi\RestApiResponseError;
use Clockdown\Backend\App\Services\RestApi\RestApiResponseSuccess;
use Clockdown\Backend\Modules\Api\V1\Repositories\CountdownsRepository;

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
    public static function singletone( CountdownsRepository $repository ) {

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
            return RestApiResponseError::missing_parameter( 'name', 'Countdown creation' );
        }

        if ( empty( $description_param ) || $description_param === null ) {
            return RestApiResponseError::missing_parameter( 'description', 'Countdown creation' );
        }

        $new_countdown = array(
            'name'        => sanitize_text_field( $name_param ),
            'description' => sanitize_text_field( $description_param ),
        );

        $result = $this->repository->insert( $new_countdown );

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), 'Countdown creation' );
        }

        return RestApiResponseSuccess::success( 'Countdown created', array(
            'operation' => 'Countdown creation',
            'payload'   => $result->to_array()['payload'],
        ) );

    }

    public function update( \WP_REST_Request $request ) {
        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return RestApiResponseError::invalid_parameter( 'id', 'Countdown update' );
        }

        $name_param        = $request->get_param( 'name' );
        $description_param = $request->get_param( 'description' );

        if ( empty( $name_param ) || $name_param === null ) {
            return RestApiResponseError::missing_parameter( 'name', 'Countdown update' );
        }

        if ( empty( $description_param ) || $description_param === null ) {
            return RestApiResponseError::missing_parameter( 'description', 'Countdown update' );
        }

        $next_countdown = array(
            'name'        => sanitize_text_field( $name_param ),
            'description' => sanitize_text_field( $description_param ),
        );

        $result = $this->repository->update( $next_countdown, $countdown_id );

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), 'Countdown update' );
        }

        if ( $result instanceof DatabaseResponseNotAffected ) {
            return RestApiResponseError::database_records_not_affected( $result->get_message(), 'Countdown update' );
        }

        return RestApiResponseSuccess::success( 'Countdown updated', array(
            'operation' => 'Countdown update',
            'payload'   => $result->to_array()['payload'],
        ) );

    }

    public function delete( \WP_REST_Request $request ) {
        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return RestApiResponseError::invalid_parameter( 'id', 'Countdown deletion' );
        }

        $result = $this->repository->delete( $countdown_id );

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), 'Countdown deletion' );
        }

        if ( $result instanceof DatabaseResponseNotAffected ) {
            return RestApiResponseError::database_records_not_affected( $result->get_message(), 'Countdown update' );
        }

        return RestApiResponseSuccess::success( 'Countdown deleted', array(
            'operation' => 'Countdown deletion',
            'payload'   => $result->to_array()['payload'],
        ) );

    }

    public function find_all() {

        $result = $this->repository->find_all();

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), 'Countdown find all' );
        }

        if ( $result instanceof DatabaseResponseEmpty ) {
            return RestApiResponseSuccess::database_records_empty( $result->get_message(), 'Countdown update' );
        }

        return RestApiResponseSuccess::success( 'Countdowns found', array(
            'operation' => 'Countdown find all',
            'payload'   => $result->to_array()['payload'],
        ) );

    }

    public function find_by_id( \WP_REST_Request $request ) {

        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return RestApiResponseError::invalid_parameter( 'id', 'Countdown find by id' );
        }

        $result = $this->repository->find_by_id( $countdown_id );

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), 'Countdown find by id' );
        }

        if ( $result instanceof DatabaseResponseNotFound ) {
            return RestApiResponseError::database_record_not_found( $result->get_message(), 'Countdown update' );
        }

        return RestApiResponseSuccess::success( 'Countdown found', array(
            'operation' => 'Countdown find by id',
            'payload'   => $result->to_array()['payload'],
        ) );

    }

}
