<?php

namespace WBGCountdown\Interfaces;

interface LoggerService {
    public function log_error( array $errorData = array() );
}
