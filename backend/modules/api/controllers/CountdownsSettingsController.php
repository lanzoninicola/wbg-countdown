<?php

namespace Clockdown\Backend\Modules\Api\Controllers;

use Clockdown\Backend\App\Common\DatabaseError;
use Clockdown\Backend\Modules\Api\Repositories\CountdownsSettingsRepository;

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
    public static function get_instance( CountdownsSettingsRepository $repository ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsSettingsController( $repository );
        }

        return self::$instance;
    }

    public function __construct( CountdownsSettingsRepository $repository ) {
        $this->repository = $repository;
    }

    public function create( \WP_REST_Request $request ) {

        $countdown_id_param = $request->get_param( 'countdown_id' );
        $settings_param     = $request->get_param( 'settings' );

        if ( empty( $countdown_id_param ) || $countdown_id_param === null ) {
            return new \WP_Error( 'missing_parameters', 'Missing countdown_id parameter', array( 'status' => 400 ) );
        }

        $new_countdown = array(
            'countdown_id' => sanitize_text_field( $countdown_id_param ),
            'settings'     => json_encode( $settings_param ),
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

        $countdown_id_param = $request->get_param( 'countdown_id' );
        $settings_param     = $request->get_param( 'settings' );

        if ( empty( $countdown_id_param ) || $countdown_id_param === null ) {
            return new \WP_Error( 'missing_parameters', 'Missing countdown_id parameter', array( 'status' => 400 ) );
        }

        $next_countdown_settings = array(
            'countdown_id' => sanitize_text_field( $countdown_id_param ),
            'settings'     => json_encode( $settings_param ),
        );

        $result = $this->repository->update( $next_countdown_settings, $countdown_id );

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
