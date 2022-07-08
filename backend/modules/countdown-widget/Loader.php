<?php

namespace Clockdown\Backend\Modules\CountdownWidget;

/**
 * The public-facing functionality of the plugin.
 *
 * @package    Clockdown
 * @subpackage Clockdown/public
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
 * @package    Clockdown
 * @subpackage Clockdown/public
 *
 * @author     Lanzoni Nicola <lanzoni.nicola@gmail.com>
 */
class Loader {

    private $script_version = '0.0.1';

    private $style_version = '0.0.1';

    /**
     * Register the stylesheets for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_styles() {

        wp_enqueue_style(
            'clockdown-widget-style',
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/clockdown-widget/assets/index.css',
            array(),
            $this->style_version
        );

    }

    /**
     * Register the JavaScript for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts() {

        wp_enqueue_script(
            'clockdown-widget-script-public',
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/clockdown-widget/assets/index.js',
            $this->script_version,
            false
        );

    }

}
