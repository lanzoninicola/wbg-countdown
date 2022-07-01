<?php

namespace Clockdown\Backend\PluginCore;

use Clockdown\Backend\Modules\Api\Routes;
use Clockdown\Backend\Modules\CountdownWidget\Loader as CountdownWidgetLoader;
use Clockdown\Backend\Modules\CountdownWidget\Shortcode as CountdownWidgetShortcode;
use Clockdown\Backend\Modules\TemplatesEditor\Loader as TemplatesEditorLoader;
use Clockdown\Backend\PluginCore\I18n;
use Clockdown\Backend\PluginCore\Loader;
use Clockdown\Services\ScriptLocalizerService;
use function Clockdown\Backend\App\Functions\add_menu;

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @package    Clockdown
 * @subpackage Clockdown/plugin-core
 *
 * @author     Lanzoni Nicola <lanzoni.nicola@gmail.com>
 *
 * @since      1.0.0
 */
class Core {

    /**
     * The loader that's responsible for maintaining and registering all hooks that power
     * the plugin.
     *
     * @access   protected
     * @var Loader $loader Maintains and registers all hooks for the plugin.
     * @since    1.0.0
     */
    protected $loader;

    /**
     * Define the core functionality of the plugin.
     *
     * Set the plugin name and the plugin version that can be used throughout the plugin.
     * Load the dependencies, define the locale, and set the hooks for the admin area and
     * the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function __construct() {

        $this->loader = new Loader();

        $this->set_locale();

        $this->define_admin_hooks();
        $this->define_public_hooks();

        // this must be run after the "define_*_hooks"
        $this->localize_scripts();

    }

    /**
     * Adding the plugin menu to Wordpress admin menu
     *
     */
    public function add_plugin_menu() {
        add_menu( 'Clockdown', 'clockdown' );
    }

    /**
     * Define the locale for this plugin for internationalization.
     *
     * Uses the i18n class in order to set the domain and to register the hook
     * with WordPress.
     *
     * @access   private
     * @since    1.0.0
     */
    private function set_locale() {

        $plugin_i18n = new I18n();

        $this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
        $this->loader->add_action( 'admin_enqueue_scripts', $plugin_i18n, 'enqueue_scripts' );

    }

    /**
     * Register all of the hooks related to the admin area functionality
     * of the plugin.
     *
     * @access   private
     * @since    1.0.0
     */
    private function define_admin_hooks() {

        // Adding the plugin menu to Wordpress admin menu
        $this->loader->add_action( 'admin_menu', $this, 'add_plugin_menu' );

        // Adding the assets for the front-end of templates editor
        $templates = new TemplatesEditorLoader();
        $this->loader->add_action( 'admin_menu', $templates, 'add_menu' );
        $this->loader->add_action( 'admin_enqueue_scripts', $templates, 'enqueue_scripts' );
        $this->loader->add_action( 'admin_enqueue_scripts', $templates, 'enqueue_styles' );

        // Registring the routes for the rest api
        $routes = new Routes();
        $this->loader->add_action( 'rest_api_init', $routes, 'register_api_endpoints' );

    }

    /**
     * Register all of the hooks related to the public-facing functionality
     * of the plugin.
     *
     * @access   private
     * @since    1.0.0
     */
    private function define_public_hooks() {

        // Adding the assets for the front-end of Countdown Widget
        $widget_loader = new CountdownWidgetLoader();
        $this->loader->add_action( 'wp_enqueue_scripts', $widget_loader, 'enqueue_scripts' );

        new CountdownWidgetShortcode();

    }

    /**
     * Define the data to be localized on the frontend html page as Javascript object.
     *
     * @return void
     */
    private function localize_scripts() {

        $script_localizer = new ScriptLocalizerService();

        $script_localizer->localize(
            array(
                'apiURL'   => home_url( '/wp-json' ),
                'language' => get_locale(),
            )
        );

        $this->loader->add_action( 'admin_enqueue_scripts', $script_localizer, 'localize_script' );
    }

    /**
     * Run the loader to execute all of the hooks with WordPress.
     *
     * @since    1.0.0
     */
    public function run() {
        $this->loader->run();
    }

    /**
     * The reference to the class that orchestrates the hooks with the plugin.
     *
     * @since     1.0.0
     *
     * @return Clockdown_Loader Orchestrates the hooks of the plugin.
     */
    public function get_loader() {
        return $this->loader;
    }

    /**
     * Retrieve the version number of the plugin.
     *
     * @since     1.0.0
     *
     * @return string The version number of the plugin.
     */
    public function get_version() {
        return $this->version;
    }

}
