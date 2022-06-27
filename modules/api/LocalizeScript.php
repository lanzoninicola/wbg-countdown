<?php

namespace Clockdown\Modules\Api;

/**
 * The class will create the custom rest API end-point for the countdown.
 *
 * @package    Wbg_Countdown
 * @subpackage Wbg_Countdown/admin
 *
 * @link       https://lanzoninicola.com.br
 * @since      1.0.0
 */

class LocalizeScript {

    /**
     * Register the JavaScript for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts() {

        wp_localize_script( CLOCKDOWN_PLUGIN_NAME, 'wbg_countdown_admin_ajax', array(
            'apiURL' => admin_url( 'admin-ajax.php' ),
            'nonce'  => wp_create_nonce( 'wbg_countdown_admin_ajax_nonce' ),
        ) );
    }

}
