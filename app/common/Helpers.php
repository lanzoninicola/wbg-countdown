<?php

namespace Clockdown\App\Common;

class Helpers {

    /**
     * Check if the array given is associative.
     *
     * @param array $array
     * @return boolean
     */
    public static function is_associative_array( array $array ) {
        return (bool) count( array_filter( array_keys( $array ), 'is_string' ) );
    }

    /**
     * Check if the value passed is an instance of the plugin Error class.
     *
     * @param mixde $value
     * @return boolean
     */
    public static function is_error( $value ) {
        return is_a( $value, 'Clockdown\App\Common\Error' );
    }

    /**
     * Check if the option exists in the database.
     *
     * @param string $option_name
     * @return void
     */
    public static function option_exists( $option_name ) {
        return (bool) get_option( $option_name ) !== false;
    }

}