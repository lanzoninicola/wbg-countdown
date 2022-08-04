<?php

namespace Clockdown\App\Services\RestApi;

class RestApiEndpoint {

    private $verbs = array( 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' );

    /**
     * Describe the endpoint.
     *
     * @param string $url The URL of the endpoint.
     * @param string $verb The verb of the endpoint.
     * @param string $callback The callback of the endpoint.
     * @param string $capability The capability of the endpoint.
     * @param string $middleware_object The instance of the RestApiValidatorMiddleware class for validationa and sanitization.
     */
    public function __construct( string $url, string $verb, array $callback, string $capability, RestApiValidatorMiddleware $middleware_object ) {

        if ( !in_array( $verb, $this->verbs ) ) {
            throw new \Exception( 'Invalid verb.' );

        }

        if ( empty( $middleware_object ) ) {
            throw new \Exception( 'Guard not set.' );
        }

        $this->url               = $url;
        $this->verb              = $verb;
        $this->callback          = $callback;
        $this->capability        = $capability;
        $this->middleware_object = $middleware_object;

    }

    /**
     * Returns the url.
     *
     * @return string
     */
    public function url(): string {
        return $this->url;
    }

    /**
     * The verb of the endpoint.
     *
     * @return string
     */
    public function verb(): string {
        return $this->verb;
    }

    /**
     * Returns the callback array. The callback array is an array of two elements: [class, method].
     * The method is run when the endpoint is called.
     *
     * @return array
     */
    public function callback(): array{
        return $this->callback;
    }

    /**
     * Returns the capability required to access this endpoint.
     *
     * @return string
     */
    public function capability(): string {
        return $this->capability;
    }

    /**
     * Returns the name of the guard class that contains the methods
     * to run to validation and sanitization of the request arguments.
     *
     * @return object
     */
    public function middleware_object(): object {
        return $this->middleware_object;
    }

}
