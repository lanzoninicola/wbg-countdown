<?php

namespace WBGCountdown\Modules\Admin;

use function WBGCountdown\Functions\create_submenu;

/**
 * The class that represents the Settings Page.
 *
 * @package    Wbg_Countdown
 * @subpackage Wbg_Countdown/admin
 *
 * @link       https://lanzoninicola.com.br
 * @since      1.0.0
 */

class Settings {
    /**
     *  Add the menu item in the admin menu
     */
    public function add_menu() {

        create_submenu(
            'wbg-countdown',
            'Templates',
            'wbg-countdown-templates',
            array(
                'page_title' => 'Templates',
            )
        );

    }

    /**
     * Register the stylesheets for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_styles() {
    }

    /**
     * Register the JavaScript for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts() {

        wp_enqueue_script(
            WBG_COUNTDOWN_PLUGIN_NAME,
            WBG_COUNTDOWN_PLUGIN_BASE_URL_PATH . 'dist/admin/bundle.js',
            array(),
            $this->version,
            true
        );

    }

}
