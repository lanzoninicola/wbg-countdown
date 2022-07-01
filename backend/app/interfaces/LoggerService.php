<?php

namespace Clockdown\Backend\App\Interfaces;

interface LoggerService {
    public function log_error( array $errorData = array() );
}
