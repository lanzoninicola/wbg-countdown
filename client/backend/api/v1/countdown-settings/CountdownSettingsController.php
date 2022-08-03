<?php

namespace Clockdown\Client\Backend\Api\V1\CountdownSettings;

use Clockdown\App\Common\Helpers;
use Clockdown\App\Services\RestApi\RestApiResponseError;
use Clockdown\App\Services\RestApi\RestApiResponseSuccess;

class CountdownSettingsController {

    /**
     * Repository
     *
     * @var CountdownSettingsService
     */
    public $service;

    /**
     * Singleton instance.
     *
     * @var CountdownSettingsController
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownSettingsController
     */
    public static function singletone( CountdownSettingsService $service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownSettingsController( $service );
        }

        return self::$instance;
    }

    public function __construct( CountdownSettingsService $service ) {
        $this->service = $service;
    }

    /**
     * $new_countdown = array(
    'countdown_id' => sanitize_text_field( $countdown_id_param ),
    'settings'     => json_encode( $settings_param ),
    );
     */
    public function create( \WP_REST_Request $request ) {
        $operation = 'Settings creation';

        $countdown_id_param = $request->get_param( 'countdown_id' );
        $settings_param     = $request->get_param( 'settings' );

        $new_countdown = array(
            'countdown_id' => sanitize_text_field( $countdown_id_param ),
            'settings'     => json_encode( $settings_param ),
        );

        $result = $this->service->insert( $new_countdown );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings created', array(
            'operation' => $operation,
            'payload'   => $result,
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

        $result = $this->service->update( $next_countdown_settings, $countdown_id );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings updated', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );
    }

    public function delete( \WP_REST_Request $request ) {
        $operation    = 'Settings deletion';
        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return RestApiResponseError::invalid_parameter( 'id', $operation );
        }

        $result = $this->service->delete( $countdown_id );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings deleted', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );

    }

    public function find_by_id( \WP_REST_Request $request ) {
        $operation = 'Settings find by id';

        $countdown_id = absint( $request->get_param( 'id' ) );

        if ( !is_numeric( $countdown_id ) ) {
            return RestApiResponseError::invalid_parameter( 'id', $operation );
        }

        $result = $this->service->find_by_id( $countdown_id );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings found', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );
    }

}
