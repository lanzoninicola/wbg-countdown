<?php

namespace Clockdown\Modules\Shortcode;

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
class CountdownShortcodeLoader {

    /**
     * Register the stylesheets for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_styles() {

        // wp_enqueue_style( CLOCKDOWN_PLUGIN_NAME, plugin_dir_url( __FILE__ ) . 'css/clockdown-public.css', array(), $this->version, 'all' );

    }

    /**
     * Register the JavaScript for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts() {

        wp_enqueue_script( CLOCKDOWN_PLUGIN_NAME, CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'dist/public/bundle.js', array(), $this->version, true );

    }

}
