<?php

namespace Clockdown\Backend\App\Common;

class DatabaseResponse {

    public static function error( $error_data = array( 'data' => null, 'message' => '' ) ): DatabaseError {

        $error = new DatabaseError();

        if ( $error_data['message'] !== null ) {
            $error->set_message( $error_data['message'] );
        }

        if ( $error_data['data'] !== null ) {
            $error->set_data( $error_data['data'] );
        }

        return $error;

    }

    public static function warning( $warning_data = array( 'data' => null, 'message' => '' ) ): DatabaseSuccess {

        $success = new DatabaseSuccess();

        $success->set_code( 'warning' );

        if ( $warning_data['message'] !== null ) {
            $success->set_message( $warning_data['message'] );
        }

        if ( $warning_data['data'] !== null ) {
            $success->set_data( $warning_data['data'] );
        }

        return $success;

    }

    public static function success( $success_data = array( 'data' => null, 'message' => '' ) ): DatabaseSuccess {

        $success = new DatabaseSuccess();

        if ( $success_data['message'] !== null ) {
            $success->set_message( $success_data['message'] );
        }

        if ( $success_data['data'] !== null ) {
            $success->set_data( $success_data['data'] );
        }

        return $success;

    }

}
