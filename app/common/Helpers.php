<?php

namespace Clockdown\App\Common;

use function Clockdown\get_plugin_name;

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
     * @return boolean
     */
    public static function option_exists( $option_name ) {
        return (bool) get_option( $option_name ) !== false;
    }

    /**
     * Check if the option is empty.
     *
     * @param string $option_name
     * @return boolean
     */
    public static function option_is_empty( $option_name ) {
        return empty( get_option( $option_name ) );
    }

    /**
     * Get the installation id of the plugin.
     *
     * It returns always a string no matter if the option exists or not.
     */
    public static function get_installation_id(): string {
        return get_option( get_plugin_name() . "_installation_id" );
    }

}