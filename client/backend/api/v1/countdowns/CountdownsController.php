<?php

namespace Clockdown\Client\Backend\Api\V1\Countdowns;

use Clockdown\App\Common\Helpers;
use Clockdown\App\Services\RestApi\RestApiResponseError;
use Clockdown\App\Services\RestApi\RestApiResponseSuccess;

class CountdownsController {

    /**
     * Repository
     *
     * @var CountdownsService
     */
    public $service;

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
    public static function singletone( CountdownsService $service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsController( $service );
        }

        return self::$instance;
    }

    public function __construct( CountdownsService $service ) {
        $this->service = $service;
    }

    public function create( \WP_REST_Request $request ) {
        $operation = 'Countdown creation';

        $result = $this->service->insert( $request->get_params() );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Countdown created', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );

    }

    public function update( \WP_REST_Request $request ) {
        $operation    = 'Countdown update';
        $countdown_id = $request->get_param( 'id' );

        $next_countdown = array(
            'name'        => $request->get_param( 'name' ),
            'description' => $request->get_param( 'description' ),
        );

        $result = $this->service->update( $next_countdown, $countdown_id );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Countdown updated', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );

    }

    public function delete( \WP_REST_Request $request ) {
        $operation = 'Countdown deletion';

        $result = $this->service->delete( $request->get_param( 'id' ) );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Countdown deleted', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );

    }

    public function find_all() {
        $operation = 'Countdown find all';

        $result = $this->service->find_all();

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Countdowns found', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );

    }

    public function find_by_id( \WP_REST_Request $request ) {

        $operation = 'Countdown find by id';

        $countdown_id = $request->get_param( 'id' );

        $result = $this->service->find_by_id( $countdown_id );

        if ( Helpers::is_error( $result ) ) {
            return RestApiResponseError::database_error( $result->get_error_message(), $operation );
        }

        return RestApiResponseSuccess::success( 'Countdown found', array(
            'operation' => $operation,
            'payload'   => $result,
        ) );

    }

}
