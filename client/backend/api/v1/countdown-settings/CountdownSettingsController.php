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

    public function create( \WP_REST_Request $request ) {
        $operation = 'Settings creation';

        $params = $request->get_params();

        $result = $this->service->insert( $params );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings created', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );

    }

    public function update( \WP_REST_Request $request ) {
        $operation = 'Settings update';

        $params = $request->get_params();

        $result = $this->service->update(
            $params['settings'],
            $params['id']
        );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings updated', array(
            'operation' => $operation,
        ) );

    }

    public function delete( \WP_REST_Request $request ) {
        $operation = 'Settings deletion';

        $result = $this->service->delete( $request->get_param( 'id' ) );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings deleted', array(
            'operation' => $operation,
        ) );

    }

    public function find_by_id( \WP_REST_Request $request ) {
        $operation = 'Settings find by id';

        $result = $this->service->find_by_id( $request->get_param( 'id' ) );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Settings found', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );
    }

}
