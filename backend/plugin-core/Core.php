<?php

namespace Clockdown\Backend\PluginCore;

use Clockdown\Backend\App\Services\ScriptLocalizerService;
use Clockdown\Backend\Modules\Api\Routes;
use Clockdown\Backend\Modules\CountdownWidget\CountdownWidgetShortcode;
use Clockdown\Backend\Modules\TemplatesEditor\TemplatesEditor;
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
     * The enqueuer responsible for adding the JavaScript and CSS files to Wordpress queue.
     *
     * @access protected
     * @var ScriptsEnqueuer $enqueuer Enqueues the JavaScript and CSS files.
     */
    protected $scripts_enqueuer;

    /**
     *
     *
     * @access protected
     * @var ShortcodesLoader $shortcodes_loader
     */
    protected $shortcodes_loader;

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

        $this->hooks_loader      = new HooksLoader();
        $this->scripts_enqueuer  = new ScriptsEnqueuer();
        $this->shortcodes_loader = new ShortcodesLoader();

        $this->set_locale();

        $this->define_shortcodes();
        $this->define_scripts();
        $this->define_admin_hooks();
        $this->define_public_hooks();
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
     * Adding the shortcodes to Wordpress
     *
     */
    private function define_shortcodes() {

        $this->shortcodes_loader->add(
            'clockdown',
            CountdownWidgetShortcode::class
        );

        $this->shortcodes_loader->add_localize_script(
            'clockdown',
            'clockdownLocalized',
            array(
                'apiURL'   => home_url( '/wp-json' ),
                'language' => get_locale(),
            )
        );

    }

    /**
     * Defines all the scripts/styles that will be used in the plugin.
     *
     * The benefit of this method is that it allows to define the scripts/styles in a single place,
     * and controls the version of the scripts/styles.
     *
     * @return void
     */
    private function define_scripts() {

        $this->scripts_enqueuer->add_admin_style(
            'templates-editor-style',
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/index.css',
            array(),
            '1.0.0'
        );

        $this->scripts_enqueuer->add_admin_script(
            'templates-editor-script',
            CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/templates-editor/assets/index.js',
            array(),
            '1.0.0',
            false
        );

        $this->shortcodes_loader->add_inline_script(
            'clockdown',
            array(
                'id'  => 'clockdown-widget-script',
                'src' => CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/clockdown-widget/assets/index.js',
                'ver' => '1.0.0',
            )
        );

        $this->shortcodes_loader->add_inline_stylesheet(
            'clockdown',
            array(
                'id'   => 'clockdown-widget-style',
                'href' => CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/clockdown-widget/assets/index.css',
                'ver'  => '1.0.0',
            )
        );
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

        // Adding the menu in the admin area for the templates editor
        $templates = new TemplatesEditor();
        $this->hooks_loader->add_action( 'admin_menu', $templates, 'add_menu' );

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
        // $this->hooks_loader->add_action( 'wp_enqueue_scripts', $script_localizer, 'localize_script' );

    }

    /**
     * Run:
     * 1. The Shortcodes loader to instanciate the shortcodes classes and register the shortcode.
     * 2. The Scripts enqueuer to execute all of the hooks related to javascript and css files.
     * 3. The hooks loader to execute all of the hooks with WordPress.
     *
     * @since    1.0.0
     */
    public function run() {

        $this->shortcodes_loader->run();

        $this->scripts_enqueuer->run();

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
