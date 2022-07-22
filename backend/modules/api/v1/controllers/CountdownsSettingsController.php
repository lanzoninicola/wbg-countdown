<?php

namespace Clockdown\Backend\Modules\Api\V1\Controllers;

use Clockdown\Backend\App\Services\Database\DatabaseResponseError;
use Clockdown\Backend\App\Services\Database\DatabaseResponseNotAffected;
use Clockdown\Backend\App\Services\Database\DatabaseResponseNotFound;
use Clockdown\Backend\App\Services\RestApi\RestApiResponseError;
use Clockdown\Backend\App\Services\RestApi\RestApiResponseSuccess;
use Clockdown\Backend\Modules\Api\V1\Repositories\CountdownsSettingsRepository;

class CountdownsSettingsController {

    /**
     * Repository
     *
     * @var CountdownsSettingsRepository
     */
    public $repository;

    /**
     * Singleton instance.
     *
     * @var CountdownsSettingsController
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsSettingsController
     */
    public static function singletone( CountdownsSettingsRepository $repository ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsSettingsController( $repository );
        }

        return self::$instance;
    }

    public function __construct( CountdownsSettingsRepository $repository ) {
        $this->repository = $repository;
    }

    public function create( \WP_REST_Request $request ) {
        $operation = 'Settings creation';

        $countdown_id_param = $request->get_param( 'countdown_id' );
        $settings_param     = $request->get_param( 'settings' );

        if ( empty( $countdown_id_param ) || $countdown_id_param === null ) {
            return RestApiResponseError::missing_parameter( 'countdownId', $operation );
        }

        $new_countdown = array(
            'countdown_id' => sanitize_text_field( $countdown_id_param ),
            'settings'     => json_encode( $settings_param ),
        );

        $result = $this->repository->insert( $new_countdown );

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings created', array(
            'operation' => $operation,
            'payload'   => $result->to_array()['payload'],
        ) );

    }

    public function update( \WP_REST_Request $request ) {
        $operation    = 'Settings update';
        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return RestApiResponseError::invalid_parameter( 'id', $operation );
        }

        $countdown_id_param = $request->get_param( 'countdown_id' );
        $settings_param     = $request->get_param( 'settings' );

        if ( empty( $countdown_id_param ) || $countdown_id_param === null ) {
            return RestApiResponseError::missing_parameter( 'countdownId', $operation );
        }

        $next_countdown_settings = array(
            'countdown_id' => sanitize_text_field( $countdown_id_param ),
            'settings'     => json_encode( $settings_param ),
        );

        $result = $this->repository->update( $next_countdown_settings, $countdown_id );

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), $operation );
        }

        if ( $result instanceof DatabaseResponseNotAffected ) {
            return RestApiResponseError::database_records_not_affected( $result->get_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings updated', array(
            'operation' => $operation,
            'payload'   => $result->to_array()['payload'],
        ) );
    }

    public function delete( \WP_REST_Request $request ) {
        $operation    = 'Settings deletion';
        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return RestApiResponseError::invalid_parameter( 'id', $operation );
        }

        $result = $this->repository->delete( $countdown_id );

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), $operation );
        }

        if ( $result instanceof DatabaseResponseNotAffected ) {
            return RestApiResponseError::database_records_not_affected( $result->get_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings deleted', array(
            'operation' => $operation,
            'payload'   => $result->to_array()['payload'],
        ) );

    }

    public function find_by_id( \WP_REST_Request $request ) {
        $operation = 'Settings find by id';

        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return RestApiResponseError::invalid_parameter( 'id', $operation );
        }

        $result = $this->repository->find_by_id( $countdown_id );

        if ( $result instanceof DatabaseResponseError ) {
            return RestApiResponseError::database_error( $result->get_message(), $operation );
        }

        if ( $result instanceof DatabaseResponseNotFound ) {
            return RestApiResponseError::database_record_not_found( $result->get_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings found', array(
            'operation' => $operation,
            'payload'   => $result->to_array()['payload'],
        ) );
    }

}
