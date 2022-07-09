<?php

namespace Clockdown\Backend\PluginCore;

use Clockdown\Backend\App\Services\ScriptLocalizerService;
use Clockdown\Backend\Modules\Api\Routes;
use Clockdown\Backend\Modules\CountdownWidget\Loader as CountdownWidgetLoader;
use Clockdown\Backend\Modules\CountdownWidget\Shortcode as CountdownWidgetShortcode;
use Clockdown\Backend\Modules\TemplatesEditor\Loader as TemplatesEditorLoader;
use Clockdown\Backend\PluginCore\I18n;
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
     * @var HooksLoader $hooks_loader Maintains and registers all hooks for the plugin.
     * @since    1.0.0
     */
    protected $hooks_loader;

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

        $this->hooks_loader = new HooksLoader();

        $this->set_locale();

        $this->define_admin_hooks();
        $this->define_public_hooks();

        /**
         *  This must be run after the "define_*_hooks",
         *  because before you localize script, the script must be enqueued.
         */
        $this->define_localized_script();

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

        $this->hooks_loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
        $this->hooks_loader->add_action( 'admin_enqueue_scripts', $plugin_i18n, 'enqueue_scripts' );

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
        $this->hooks_loader->add_action( 'admin_menu', $this, 'add_plugin_menu' );

        // Adding the assets for the front-end of templates editor
        $templates = new TemplatesEditorLoader();
        $this->hooks_loader->add_action( 'admin_menu', $templates, 'add_menu' );
        $this->hooks_loader->add_action( 'admin_enqueue_scripts', $templates, 'enqueue_scripts' );
        $this->hooks_loader->add_action( 'admin_enqueue_scripts', $templates, 'enqueue_styles', 11 );

        // This hook fires when the user access to the clockdown settings page in the admin area
        // the handle name is "{parent-slug}_page_{slug}"
        // try to deregister the elementor js scripts that cause the conflict with plugin's reactjs code
        $this->hooks_loader->add_action( 'clockdown_page_clockdown-templates', $templates, 'deregister_script', 1 );

        // Registring the routes for the rest api
        $routes = new Routes();
        $this->hooks_loader->add_action( 'rest_api_init', $routes, 'register_api_endpoints' );

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
        $this->hooks_loader->add_action( 'wp_enqueue_scripts', $widget_loader, 'enqueue_scripts' );
        $this->hooks_loader->add_action( 'wp_enqueue_scripts', $widget_loader, 'enqueue_styles' );

        new CountdownWidgetShortcode();

    }

    /**
     * Define the data to be localized on the frontend html page as Javascript object.
     * Default object name is: ${pluginName}Localized
     *
     * @return void
     */
    private function define_localized_script() {

        $script_localizer = new ScriptLocalizerService();

        $script_localizer->localize(
            array(
                'apiURL'   => home_url( '/wp-json' ),
                'language' => get_locale(),
            )
        );

        $this->hooks_loader->add_action( 'admin_enqueue_scripts', $script_localizer, 'localize_script' );
        $this->hooks_loader->add_action( 'wp_enqueue_scripts', $script_localizer, 'localize_script' );

    }

    /**
     * Run the loader to execute all of the hooks with WordPress.
     *
     * @since    1.0.0
     */
    public function run() {
        $this->hooks_loader->run();
    }

    /**
     * The reference to the class that orchestrates the hooks with the plugin.
     *
     * @since     1.0.0
     *
     * @return Clockdown_Loader Orchestrates the hooks of the plugin.
     */
    public function get_loader() {
        return $this->hooks_loader;
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
