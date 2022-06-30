<?php

namespace Clockdown\Modules\TemplatesEditor;

use function Clockdown\Functions\create_submenu;

/**
 * The class that represents the Templates Page.
 *
 * @package    Clockdown
 * @subpackage Clockdown/admin
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
            __( 'Templates', CLOCKDOWN_TEXT_DOMAIN ),
            'clockdown-templates',
            array(
                'page_title' => __( 'Templates', CLOCKDOWN_TEXT_DOMAIN ),
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
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/index.css',
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
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/index.js',
            array(),
            $this->version,
            false
        );

    }

}
