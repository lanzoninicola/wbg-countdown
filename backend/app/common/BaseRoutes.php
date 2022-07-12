<?php

namespace Clockdown\Backend\App\Common;

/**
 * Base class for defining the endpoints to be registered.
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
     * The endpoints list.
     */
    protected $endpoints = array();

    /**
     * Register the endpoints for the custom REST-API.
     *
     * @param string $root_path The root path of the plugin.
     * @param string $api_version The API version.
     * @param array $endpoints The endpoints list.
     *
     * @example https://domain.com/root_path/api_version/leaf
     */
    public function __construct( string $root_path, string $api_version, array $endpoints ) {
        $this->root_path   = $root_path;
        $this->api_version = $api_version;
        $this->endpoints   = $endpoints;
    }

    /**
     * Return the callback function for the register_rest_route() wordpress function.
     */
    protected function get_callback( string $class_name, string $method_name ) {}

    /**
     * Returns the root path of REST-API.
     *
     * @return string
     */
    public function root_path(): string {
        return $this->root_path;
    }

    /**
     * Returns the api version
     *
     * @return string
     */
    public function api_version(): string {
        return $this->api_version;
    }

    /**
     * Returns the array of endpoints.
     *
     * @return array
     * @example array(
     *    'endpoint' => array(
     *      'method' => array(     // GET, POST, PUT, DELETE
     *               'callback' => callback // class name, method name
     *               'capability' => 'capability', // wordpress 'manage_options'
     *       )
     * )
     */
    public function endpoints(): array{
        return $this->endpoints;
    }

}
