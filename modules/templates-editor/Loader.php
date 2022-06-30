<?php

namespace Clockdown\Modules\TemplatesEditor;

use function Clockdown\Functions\create_submenu;

/**
 * The class that represents the Templates Page.
 *
 * @package    Wbg_Countdown
 * @subpackage Wbg_Countdown/admin
 *
 * @link       https://lanzoninicola.com.br
 * @since      1.0.0
 */

class Loader {
    /**
     *  Add the menu item in the admin menu
     */
    public function add_menu() {

        create_submenu(
            'clockdown',
            'Templates',
            'clockdown-templates',
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

        wp_enqueue_style(
            CLOCKDOWN_PLUGIN_NAME,
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/editor.css',
            array(),
            $this->version,
        );

        wp_enqueue_style(
            CLOCKDOWN_PLUGIN_NAME,
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/editor2.css',
            array(),
            $this->version,
        );

    }

    /**
     * Register the JavaScript for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts() {

        wp_enqueue_script(
            CLOCKDOWN_PLUGIN_NAME,
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/editor.js',
            array(),
            $this->version,
            false
        );

    }

}
