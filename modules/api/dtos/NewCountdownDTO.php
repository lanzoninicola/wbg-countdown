<?php

namespace WBGCountdown\Modules\Api\Dtos;

class NewCountdownDTO {

    private $name;

    private $description;

    public function __construct( $name, $description ) {
        $this->name        = sanitize_text_field( $name );
        $this->description = sanitize_text_field( $description );
    }

    public function get_name() {
        return $this->name;
    }

    public function get_description() {
        return $this->description;
    }

}