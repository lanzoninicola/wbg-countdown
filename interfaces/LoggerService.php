<?php

namespace Clockdown\Interfaces;

interface LoggerService {
    public function log_error( array $errorData = array() );
}
