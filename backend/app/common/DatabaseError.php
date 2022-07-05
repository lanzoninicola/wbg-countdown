<?php

namespace Clockdown\Backend\App\Common;

class DatabaseError {

    private $code;

    private $message;

    private $data;

    public function __construct() {
        $this->code    = 'error';
        $this->message = 'Database error';
        $this->data    = array(
            'status' => 500,
        );
    }

    public function get_code(): string {
        return $this->code;
    }

    public function get_message(): string {
        return $this->message;
    }

    public function get_data() {
        return $this->data['payload'];
    }

    public function set_code( string $code ): void {
        $this->code = $code;
    }

    public function set_message( string $message ): void {
        $this->message = $message;
    }

    public function set_data( $data ): void {
        $this->data['payload'] = $data;
    }

    public function to_array(): array{
        return array(
            'code'    => $this->code,
            'message' => $this->message,
            'data'    => $this->data,
        );
    }
}