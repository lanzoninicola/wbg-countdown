<?php

namespace Clockdown\Backend\App\Services\Database;

class DatabaseResponseWarning extends DatabaseResponse {

    public function __construct( string $message = 'Database warning', $payload = null ) {

        $this->set_code( 'warning' );
        $this->set_message( $message );
        $this->set_payload( $payload );

    }

}
