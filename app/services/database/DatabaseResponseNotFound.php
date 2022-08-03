<?php

namespace Clockdown\App\Services\Database;

/**
 * Response for not found record (singular).
 */
class DatabaseResponseNotFound extends DatabaseResponse {

    public function __construct( string $message = 'No record was found', $payload = null ) {

        parent::__construct( 'error', $message, $payload );

    }

}
