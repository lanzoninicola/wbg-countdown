<?php

namespace Clockdown\Backend\App\Services;

use Clockdown\Backend\App\Common\Helpers;

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
    private $handle = CLOCKDOWN_PLUGIN_NAME . 'admin-localizer';

    /**
     * This is the name of Javascript object that will be used to localize the script.
     * Once the script is localized, it will be accessible as `clockdown_localizer.[props]`.
     *
     * @var string
     */
    private $object_name = CLOCKDOWN_PLUGIN_NAME . 'Localized';

    /**
     * This is the content of the Javascript object
     * that will be used to localize the script in the admin area.
     *
     * @var array
     */
    public $l10n_admin = array();

    /**
     * This is the content of the Javascript object
     * that will be used to localize the script in the public area.
     *
     * @var array
     */
    public $l10n_public = array();

    /**
     * Singleton instance.
     *
     * @var ScriptLocalizerService
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return ScriptLocalizerService
     */
    public static function singletone() {

        if ( self::$instance === null ) {
            self::$instance = new ScriptLocalizerService();
        }

        return self::$instance;
    }

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
     * Register the data to be localized only for the admin area
     *
     * @param array $l10n - associative array $l10n that will transformed to Javascript object
     * @return void
     */
    public function localize_admin( array $l10n ) {

        $this->is_associative_array( $l10n );

        $next_l10n        = array_merge( $this->l10n_admin, $l10n );
        $this->l10n_admin = $next_l10n;

        $this->admin_enqueue_scripts();
    }

    /**
     * Register the data to be localized only for the public area
     *
     * @param array $l10n - associative array $l10n that will transformed to Javascript object
     * @return void
     */
    public function localize_public( array $l10n ) {

        $this->is_associative_array( $l10n );

        $next_l10n         = array_merge( $this->l10n_public, $l10n );
        $this->l10n_public = $next_l10n;

        $this->enqueue_scripts();
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
                $this->l10n_admin,
                array(
                    'nonce'         => wp_create_nonce( CLOCKDOWN_PLUGIN_NAME . 'nonce' ),
                    'wp_rest_nonce' => wp_create_nonce( 'wp_rest' ),
                )
            )
        );
    }

    public function localize_script_public() {

        wp_localize_script(
            $this->handle,
            $this->object_name,
            array_merge(
                $this->l10n_public,
                array(
                    'nonce'         => wp_create_nonce( CLOCKDOWN_PLUGIN_NAME . 'nonce' ),
                    'wp_rest_nonce' => wp_create_nonce( 'wp_rest' ),
                )
            )
        );
    }

    /**
     * Check if the array given is associative, otherwise throw an exception.
     *
     * @param array $l10n
     * @return boolean
     */
    protected function is_associative_array( array $l10n ) {

        if ( !Helpers::is_associative_array( $l10n ) ) {
            throw new \Exception( 'ScriptLocalizerService::localize - The data must be an associative array.' );
        }

    }

    private function enqueue_scripts() {

        add_action( 'wp_enqueue_scripts', array( $this, 'localize_script_public' ) );
    }

    private function admin_enqueue_scripts() {

        add_action( 'admin_enqueue_scripts', array( $this, 'localize_script' ) );
    }

}
