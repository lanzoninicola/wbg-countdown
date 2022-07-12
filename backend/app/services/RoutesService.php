<?php

namespace Clockdown\Backend\App\Services;

use Clockdown\Backend\App\Common\BaseRoutes;

/**
 * Class responsible for registering the routes for custom REST-API.
 *
 * @method void add_routes()
 * @method void run()
 */
class RoutesService {

    public function __construct( BaseRoutes $routes ) {

        $this->root_path   = $routes->root_path();
        $this->api_version = $routes->api_version();
        $this->routes      = $routes->routes();

    }

    public function run() {

        add_action( 'rest_api_init', array( $this, 'register_api_endpoints' ) );
    }

    /**
     * Register the routes for the custom REST-API.
     *
     * @param string $root_path The root path of the plugin.
     * @param string $api_version The API version.
     *
     * @example https://domain.com/root_path/api_version/leaf
     */
    public function register_api_endpoints() {

        $full_api_root_path = "{$this->root_path}/{$this->api_version}";

        if ( !$this->routes ) {
            throw new \Exception( 'Routes not set. Set the routes first with the "add_routes" method.' );
        }

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
     * @param object $controller_object The controller object.
     * @param string $method_name The method name that will handle the API call.
     *
     * @return string The callback function.
     */
    private function get_callback( object $controller_object, string $method_name ) {

        return array( $controller_object, $method_name );
    }

    /**
     * Get the permission callback function for the register_rest_route() wordpress function.
     *
     * @param string $capability The capability.
     * @return string The permission callback function.
     */
    private function get_permission_callback( string $capability ) {

        if ( 'public' === $capability ) {
            return '__return_true';
        }

        return function () use ( $capability ) {
            return current_user_can( $capability );
        };

    }

}
