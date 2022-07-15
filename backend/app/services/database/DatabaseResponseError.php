<?php

namespace Clockdown\Backend\App\Services\Database;

class DatabaseResponseError extends DatabaseResponse {

    public function __construct( string $message = 'Database error', $payload = null ) {

        $this->set_code( 'error' );
        $this->set_message( $message );
        $this->set_payload( $payload );

    }

}
