<?php

namespace Clockdown\Modules\CountdownWidget;

/**
 * The public-facing functionality of the plugin.
 *
 * @package    Wbg_Countdown
 * @subpackage Wbg_Countdown/public
 *
 * @link       https://lanzoninicola.com.br
 * @since      1.0.0
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Wbg_Countdown
 * @subpackage Wbg_Countdown/public
 *
 * @author     Lanzoni Nicola <lanzoni.nicola@gmail.com>
 */
class Loader {

    /**
     * Register the stylesheets for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_styles() {

    }

    /**
     * Register the JavaScript for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts() {

        wp_enqueue_script(
            CLOCKDOWN_PLUGIN_NAME . '-public',
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/shortcode/assets/index.js',
            $this->version,
            false
        );

    }

}
