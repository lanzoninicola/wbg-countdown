<?php

namespace Clockdown\Backend\App\Services;

/**
 * The class responsible for localize the script.
 *
 * @package    Clockdown
 * @subpackage Clockdown/admin
 *
 * @link       https://lanzoninicola.com.br
 * @since      1.0.0
 */

class ScriptLocalizerService {

    public $l10n = array();

    /**
     * Register the data to be localized.
     *
     * @param array $l10n - associative array $l10n that will transformed to Javascript object
     * @return void
     */
    public function localize( array $l10n ) {
        $this->l10n = $l10n;
    }

    /**
     * Register the JavaScript for the admin area.
     *
     * @since    1.0.0
     */
    public function localize_script() {

        wp_localize_script(
            CLOCKDOWN_PLUGIN_NAME,
            'appLocalized',
            array_merge(
                $this->l10n,
                array(
                    'nonce' => wp_create_nonce( CLOCKDOWN_PLUGIN_NAME . 'nonce' ),
                )
            )
        );
    }

}
