<?php

namespace Clockdown\Backend\App\Services\RestApi;

class RestApiResponseError {

    public static function error( string $message, array $data, int $status = 500 ) {

        $error_data = array_merge( $data, array(
            'status' => $status,
        ) );

        return new \WP_Error( 'error', $message, $error_data );

    }

    public static function missing_parameter( string $parameter, string $operation ) {

        return self::error( 'Missing parameter', array(
            'operation' => $operation,
            'payload'   => "Expected '$parameter' parameter",
        ), 400 );

    }

    public static function invalid_parameter( string $parameter, string $operation ) {

        return self::error( 'Invalid parameter', array(
            'operation' => $operation,
            'payload'   => "'$parameter' is not in the expected format",
        ), 400 );

    }

    public static function database_error( string $message, string $operation ) {

        return self::error( 'Database error', array(
            'operation' => $operation,
            'payload'   => $message,
        ), 500 );

    }

    public static function database_records_not_affected( string $message, string $operation ) {

        return self::error( 'Database bad request', array(
            'operation' => $operation,
            'payload'   => $message,
        ), 400 );

    }

    public static function database_record_not_found( string $message, string $operation ) {

        return self::error( 'Database bad request', array(
            'operation' => $operation,
            'payload'   => $message,
        ), 404 );

    }

}
