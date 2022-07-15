<?php

namespace Clockdown\Backend\App\Services\Database;

/**
 * Class responsible for handling database responses.
 *
 * Shape of the response:
 * - **CODE**: string    (success, error, warning)
 * - **MESSAGE**: string (message to be displayed)
 * - **PAYLOAD**: mixed  (* *optional* * payload)
 *
 * Class DatabaseResponse
 * @package Clockdown\Backend\App\Services\Database
 */
class DatabaseResponse {

    private $code;

    private $message;

    private $payload;

    /**
     * Return the code of the response: success, warning, error.
     *
     * @return string
     */
    public function get_code(): string {
        return $this->code;
    }

    /**
     * Return the message of the response.
     *
     * @return string
     */
    public function get_message(): string {
        return $this->message;
    }

    /**
     * Return the payload of the response.
     *
     * @return mixed
     */
    public function get_payload() {
        return $this->payload;
    }

    /**
     * Set the code of the response: success, warning, error.
     *
     * @param string $code
     */
    protected function set_code( string $code ): void {
        $this->code = $code;
    }

    /**
     * Set the message of the response.
     *
     * @param string $message
     */
    protected function set_message( string $message ): void {
        $this->message = $message;
    }

    /**
     * Set the payload of the response.
     *
     * @param mixed $payload
     */
    public function set_payload( $payload ): void {
        $this->payload = $payload;
    }

    /**
     * Return the response as an array.
     *
     * @return array
     */
    public function to_array(): array{
        return array(
            'code'    => $this->code,
            'message' => $this->message,
            'payload' => $this->payload,
        );
    }

}