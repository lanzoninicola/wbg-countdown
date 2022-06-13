<?php

namespace WBGCountdown\Modules\Api;

use WBGCountdown\Modules\Api\Factories\ControllersFactory;

/**
 * The class will create the custom REST API end-point for the countdown.
 *
 * @package    Wbg_Countdown
 * @subpackage Wbg_Countdown/admin
 *
 * @link       https://lanzoninicola.com.br
 * @since      1.0.0
 */

class Routes {

    /**
     * The is root path of each route.
     */
    private $root_path = 'wbg-countdown';

    /**
     * Version of the API, format v<number> (eg. v1, v2, v3, ...)
     *
     * @var string
     */
    private $api_version = 'v1';

    /**
     * The routes list.
     */
    private $routes = array(
        'countdowns'                      => array(
            'GET'  => array(
                'callback'   => array( 'CountdownsController', 'findAll' ),
                'capability' => 'public',
            ),
            'POST' => array(
                'callback'   => array( 'CountdownsController', 'create' ),
                'capability' => 'public',
            ),
        ),
        "/countdowns/(?P<id>\d+)"         => array(
            'GET'  => array(
                'callback'   => array( 'CountdownsController', 'findById' ),
                'capability' => 'public',
            ),
            'POST' => array(
                'callback'   => array( 'CountdownsController', 'update' ),
                'capability' => 'public',
            ),
        ),
        "/countdown-settings/(?P<id>\d+)" => array(
            'GET'  => array(
                'callback'   => array( 'CountdownsSettingsController', 'findById' ),
                'capability' => 'public',
            ),
            'POST' => array(
                'callback'   => array( 'CountdownsSettingsController', 'update' ),
                'capability' => 'public',
            ),
        ),
    );

    public function register_api_endpoints() {

        $full_api_root_path = "{$this->root_path}/{$this->api_version}";

        /** Add the custom end-points for the API */

        foreach ( $this->routes as $route => $methods ) {

            foreach ( $methods as $method => $options ) {
                register_rest_route( $full_api_root_path, $route, array(
                    'methods'             => $method,
                    'callback'            => $this->get_callback( $options['callback'][0], $options['callback'][1] ),
                    'permission_callback' => $this->get_permission_callback( $options['capability'] ),
                ) );
            }

        }

    }

    /**
     * Get the callback function for the register_rest_route() wordpress function.
     *
     * @param string $class_name The controller class name.
     * @param string $method_name The method name.
     * @return string The callback function.
     */
    public function get_callback( string $class_name, string $callback ) {

        $object = ControllersFactory::get_instance_by_class_name( $class_name );

        return array( $object, $callback );
    }

    /**
     * Get the permission callback function for the register_rest_route() wordpress function.
     *
     * @param string $capability The capability.
     * @return string The permission callback function.
     */
    public function get_permission_callback( string $capability ) {

        if ( 'public' === $capability ) {
            return '__return_true';
        }

        return function () use ( $capability ) {
            return current_user_can( $capability );
        };

    }

}
