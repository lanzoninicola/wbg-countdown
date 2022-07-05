<?php

namespace Clockdown\Backend\Modules\TemplatesEditor;

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

    private $script_version = '0.0.1';

    private $style_version = '0.0.1';

    public function add_menu() {

        $templates_editor = new TemplatesEditor();
        $templates_editor->add_menu();
    }

    /**
     * Register the stylesheets for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_styles() {

        wp_enqueue_style(
            'templates-editor-style',
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/index.css',
            array(),
            $this->style_version,
        );

    }

    /**
     * Register the JavaScript for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts() {

        wp_enqueue_script(
            'templates-editor-script',
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/index.js',
            array(),
            $this->script_version,
            false
        );

    }

    public function deregister_script() {

        wp_deregister_script( 'elementor-web-cli' );
        wp_deregister_script( 'elementor-admin-top-bar' );
        wp_deregister_script( 'elementor-common' );
        wp_deregister_script( 'elementor-app-loader' );
        wp_deregister_script( 'elementor-admin' );
    }

}
