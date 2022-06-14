<?php

namespace WBGCountdown\Inc;

class DatabaseResponse {

    public static function error( $data = null ): DatabaseError {

        $error = new DatabaseError();

        if ( !empty( $data ) ) {
            $error->set_data( $data );
        }

        return $error;

    }

    public static function warning( $data = null ): DatabaseError {

        $error = new DatabaseError();

        $error->set_code( 'database_warning' );

        if ( !empty( $data ) ) {
            $error->set_data( $data );
        }

        return $error;

    }

    public static function success( $data = null ): DatabaseSuccess {

        $success = new DatabaseSuccess();

        if ( !empty( $data ) ) {
            $success->set_data( $data );
        }

        return $success;

    }

}
