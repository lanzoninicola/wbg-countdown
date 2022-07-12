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

    /**
     * The is root path of each route.
     *
     * @var BaseRoutes[]
     */
    private $routes = array();

    public function add_routes( BaseRoutes $routes ) {

        $this->routes[] = $routes;

    }

    /**
     * Add the wordpress action to register the routes.
     *
     * @return void
     */
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

        foreach ( $this->routes as $route ) {

            $full_api_root_path = "{$route->root_path()}/{$route->api_version()}";

            if ( empty( $route->endpoints() ) ) {
                throw new \Exception( 'Endpoints not set. Set the endpoints first.' );
            }

            foreach ( $route->endpoints() as $endpoint => $methods ) {

                foreach ( $methods as $method => $options ) {
                    register_rest_route( $full_api_root_path, $endpoint, array(
                        'methods'             => $method,
                        'callback'            => $options['callback'],
                        'permission_callback' => $this->get_permission_callback( $options['capability'] ),
                    ) );
                }

            }

        }

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
