<?php

namespace Clockdown\Backend\App\Services\Database;

class DatabaseResponseSuccess extends DatabaseResponse {

    public function __construct( string $message = 'Database success', $payload = null ) {

        $this->set_code( 'success' );
        $this->set_message( $message );
        $this->set_payload( $payload );

    }

}
