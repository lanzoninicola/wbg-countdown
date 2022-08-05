<?php
namespace Clockdown\App\Services\Analytics;

use function Clockdown\get_plugin_id;
use function Clockdown\get_plugin_name;

class ProductActivationTracking {

    private static function activation_tracked_option_name() {
        return get_plugin_name() . "_activation_tracked";
    }

    private static function get_activation_data() {

        return array(
            'product_id'      => get_plugin_id(),
            'installation_id' => get_option( get_plugin_name() . "_installation_id" ),
            'site_url'        => get_site_url(),
            'site_language'   => get_bloginfo( 'language' ),
            'site_timezone'   => get_option( 'timezone_string' ) || 'UTC',
        );
    }

    /**
     * Check if the activation data has been sent to the analytics server.
     * If not, send them.
     *
     * @return boolean
     */
    private static function should_activation_track() {
        return (bool) get_option( self::activation_tracked_option_name() );
    }

    /**
     * Send the activation data to the analytics server
     *
     * If success - update the option to prevent sending the data again.
     * If failure - update the option to send the data again.
     *
     * @return void
     */
    public static function send_activation_data() {

        if ( self::should_activation_track() === true ) {
            return;
        }

        $data = self::get_activation_data();

        $response = Analytics::send_data( '/installations', $data );

        if ( is_wp_error( $response ) ) {
            self::tracking_failed();
            return;
        }

        self::tracking_success();

    }

    /**
     * Register the failed activation tracking in the wp_options table.
     *
     * @return void
     */
    private static function tracking_failed() {
        update_option( self::activation_tracked_option_name(), false );
    }

    /**
     * Register the success activation tracking in the wp_options table.
     *
     * @return void
     */
    private static function tracking_success() {
        update_option( self::activation_tracked_option_name(), true );
    }

}
