<?php

namespace Clockdown\Backend\App\Common;

/**
 * Base class for defining the routes to be registered.
 */
class BaseRoutes {

    /**
     * The is root path of each route.
     */
    protected $root_path = '';

    /**
     * Version of the API, format v<number> (eg. v1, v2, v3, ...)
     *
     * @var string
     */
    protected $api_version = '';

    /**
     * The routes list.
     */
    protected $routes = array();

    /**
     * Register the routes for the custom REST-API.
     *
     * @param string $root_path The root path of the plugin.
     * @param string $api_version The API version.
     * @param array $routes The routes list.
     *
     * @example https://domain.com/root_path/api_version/leaf
     */
    public function __construct( string $root_path, string $api_version, array $routes ) {
        $this->root_path   = $root_path;
        $this->api_version = $api_version;
        $this->routes      = $routes;
    }

    /**
     * Return the callback function for the register_rest_route() wordpress function.
     */
    protected function get_callback( string $class_name, string $method_name ) {}

    public function root_path() {
        return $this->root_path;
    }

    public function api_version() {
        return $this->api_version;
    }

    public function routes() {
        return $this->routes;
    }

}
