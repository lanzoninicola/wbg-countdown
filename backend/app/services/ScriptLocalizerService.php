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

    /**
     * This is the handle name used to localize the script.
     *
     * @access   private
     * @var string - the handle name
     * @since    1.0.0
     */
    private $handle = CLOCKDOWN_PLUGIN_NAME . '-localizer';

    /**
     * This is the name of Javascript object that will be used to localize the script.
     * Once the script is localized, it will be accessible as `clockdown_localizer.[props]`.
     *
     * @var string
     */
    private $object_name = CLOCKDOWN_PLUGIN_NAME . 'Localized';

    /**
     * This is the cointent of the Javascript object that will be used to localize the script.
     *
     * @var array
     */
    public $l10n = array();

    public function __construct() {

        /**
         * wp_localize_script works only if the handle used on
         * wp_enqueue_script() function is the same of
         * the handle used on wp_register_script()
         */
        wp_register_script( $this->handle, '' );
        wp_enqueue_script( $this->handle );
    }

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
            $this->handle,
            $this->object_name,
            array_merge(
                $this->l10n,
                array(
                    'nonce' => wp_create_nonce( CLOCKDOWN_PLUGIN_NAME . 'nonce' ),
                )
            )
        );
    }

}
