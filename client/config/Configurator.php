<?php

namespace Clockdown\Client\Config;

use Clockdown\App\Services\RestApi\RestApiEndpoint;
use Clockdown\App\Services\RestApi\RestApiRoutes;
use Clockdown\App\Services\RestApi\RestApiRoutesService;
use Clockdown\App\Services\ScriptLocalizer\ScriptAdminLocalizerService;
use Clockdown\App\Services\ScriptLocalizer\ScriptPublicLocalizerService;
use Clockdown\Client\Backend\Api\V1\CountdownSettings\CountdownSettingsControllerFactory;
use Clockdown\Client\Backend\Api\V1\Countdowns\CountdownsControllerFactory;
use Clockdown\Client\Backend\App\CountdownWidgetShortcode;
use Clockdown\Client\Backend\App\TemplatesEditorShortcode;
use Clockdown\Core\HooksLoader;
use Clockdown\Core\PluginConfigurable;
use Clockdown\Core\ScriptsEnqueuer;
use Clockdown\Core\ShortcodesLoader;
use function Clockdown\App\Functions\add_menu;
use function Clockdown\App\Functions\add_submenu;
use function Clockdown\get_plugin_api_base_url;
use function Clockdown\get_plugin_base_url_path;
use function Clockdown\get_plugin_id;
use function Clockdown\get_plugin_text_domain;

class Configurator implements PluginConfigurable {

    /**
     * Adding the plugin menu to Wordpress admin menu
     *
     */
    public function add_plugin_menu() {

        add_menu( 'Clockdown', 'clockdown' );

        add_submenu(
            'clockdown',
            __( 'Templates', get_plugin_text_domain() ),
            'clockdown-templates',
            array(
                'page_title' => __( 'Templates', get_plugin_text_domain() ),
            )
        );
    }

    /**
     * Adding the shortcodes to Wordpress
     *
     */
    public function define_shortcodes( ShortcodesLoader $shortcodes_loader ) {

        $shortcodes_loader->add(
            'clockdown',
            CountdownWidgetShortcode::class
        );

        $shortcodes_loader->add_localize_script(
            'clockdown',
            'clockdownLocalized',
            array(
                'api_url'  => get_plugin_api_base_url(),
                'language' => get_locale(),
            )
        );

        $shortcodes_loader->add_inline_script(
            'clockdown',
            array(
                'id'  => 'clockdown-widget-script',
                'src' => get_plugin_base_url_path() . 'client/frontend/public/clockdown-widget/assets/index.js',
                'ver' => '0.0.1',
            )
        );

        $shortcodes_loader->add_inline_stylesheet(
            'clockdown',
            array(
                'id'   => 'clockdown-widget-style',
                'href' => get_plugin_base_url_path() . 'client/frontend/public/clockdown-widget/assets/index.css',
                'ver'  => '0.0.1',
            )
        );

        $shortcodes_loader->add(
            'templates-editor',
            TemplatesEditorShortcode::class
        );

        $shortcodes_loader->add_inline_script(
            'templates-editor',
            array(
                'id'  => 'templates-editor-shortcode-script',
                'src' => get_plugin_base_url_path() . 'client/frontend/public/clockdown-editor/assets/index.js',
                'ver' => '0.0.1',
            )
        );

        $shortcodes_loader->add_inline_stylesheet(
            'templates-editor',
            array(
                'id'   => 'templates-editor-shortcode-style',
                'href' => get_plugin_base_url_path() . 'client/frontend/public/clockdown-editor/assets/index.css',
                'ver'  => '0.0.1',
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
    public function define_scripts( ScriptsEnqueuer $scripts_enqueuer ) {

        $scripts_enqueuer->add_admin_style(
            'templates-editor-style',
            get_plugin_base_url_path() . 'client/frontend/public/templates-editor/assets/index.css',
            array(),
            '0.0.1'
        );

        $scripts_enqueuer->add_admin_script(
            'templates-editor-script',
            get_plugin_base_url_path() . 'client/frontend/public/templates-editor/assets/index.js',
            array(),
            '0.0.1',
            false
        );

    }

    /**
     * Register all of the hooks related to the admin area functionality
     * of the plugin.
     *
     * @access   public
     * @since    1.0.0
     */
    public function define_admin_hooks( HooksLoader $hooks_loader ) {

        // Adding the plugin menu to Wordpress admin menu
        $hooks_loader->add_action( 'admin_menu', $this, 'add_plugin_menu' );

        // // Adding the menu in the admin area for the templates editor
        // $templates = new TemplatesEditor();
        // $hooks_loader->add_action( 'admin_menu', $templates, 'add_menu' );

    }

    /**
     * Register all of the hooks related to the public-facing functionality
     * of the plugin.
     *
     * @access   public
     * @since    1.0.0
     */
    public function define_public_hooks( HooksLoader $hooks_loader ) {

    }

    /**
     * Define the data to be localized on the frontend html page as Javascript object.
     * Default object name is: ${pluginName}Localized
     *
     * @return void
     */
    public function define_localized_script( ScriptAdminLocalizerService $script_admin_localizer, ScriptPublicLocalizerService $script_public_localizer ) {

        $script_admin_localizer->localize(
            array(
                'api_url'    => get_plugin_api_base_url(),
                'language'   => get_locale(),
                'product_id' => get_plugin_id(),
            )
        );

        $script_public_localizer->localize(
            array(
                'api_url'    => get_plugin_api_base_url(),
                'language'   => get_locale(),
                'product_id' => get_plugin_id(),
            )
        );

    }

    /**
     * Define the rest api routes
     *
     * 1. create an array of enpoints - RestApiEndpoint[]
     * 2. create the RestApiRoutes object passing the root_path, the api version, the array of endpoints to it
     * 3. register the routes with the rest api - $this->routes_service->add_routes( RestApiRoutes $routes )
     *
     * @return void
     */
    public function define_rest_api_routes( RestApiRoutesService $routes_service ) {

        $countdowns_endpoint   = 'countdowns';
        $countdown_id_endpoint = '/countdowns/(?P<id>\d+)';
        $settings_enpoint      = '/countdowns/(?P<id>\d+)/settings';

        $countdown_controller = CountdownsControllerFactory::create();
        $settings_controller  = CountdownSettingsControllerFactory::create();

        $endpoints_v1 = array(
            new RestApiEndpoint( $countdowns_endpoint, 'GET',
                array( $countdown_controller, 'find_all' ),
                'public',
                array()
            ),
            new RestApiEndpoint( $countdowns_endpoint, 'POST',
                array( $countdown_controller, 'create' ),
                'public',
                array(
                    'name'        => array(
                        'type'     => 'string',
                        'required' => true,
                    ),
                    'description' => array(
                        'type'     => 'string',
                        'required' => true,
                    ),
                )
            ),
            new RestApiEndpoint( $countdown_id_endpoint, 'GET',
                array( $countdown_controller, 'find_by_id' ),
                'public',
                array(
                    'id' => array(
                        'type'     => 'string:integer',
                        'required' => true,
                    ),
                )
            ),
            new RestApiEndpoint( $countdown_id_endpoint, 'PUT',
                array( $countdown_controller, 'update' ),
                'public',
                array(
                    'name'        => array(
                        'type'     => 'string',
                        'required' => true,
                    ),
                    'description' => array(
                        'type'     => 'string',
                        'required' => true,
                    ),
                )
            ),
            new RestApiEndpoint( $countdown_id_endpoint, 'DELETE',
                array( $countdown_controller, 'delete' ),
                'public',
                array(
                    'id' => array(
                        'type'     => 'string:integer',
                        'required' => true,
                    ),
                )
            ),
            new RestApiEndpoint( $settings_enpoint, 'GET',
                array( $settings_controller, 'find_by_id' ),
                'public',
                array(
                    'id' => array(
                        'type'     => 'string:integer',
                        'required' => true,
                    ),
                )
            ),
            new RestApiEndpoint( $settings_enpoint, 'POST',
                array( $settings_controller, 'create' ),
                'public',
                array(
                    'countdown_id' => array(
                        'type'     => 'integer',
                        'required' => true,
                    ),
                    'settings'     => array(
                        'type'     => 'array:json_encode',
                        'required' => true,
                    ),
                )
            ),
            new RestApiEndpoint( $settings_enpoint, 'PUT',
                array( $settings_controller, 'update' ),
                'public',
                array(
                    'id'           => array(
                        'type'     => 'string:integer',
                        'required' => true,
                    ),
                    'countdown_id' => array(
                        'type'     => 'integer',
                        'required' => true,
                    ),
                    'settings'     => array(
                        'type'     => 'array:json_encode',
                        'required' => true,
                    ),
                )
            ),
            new RestApiEndpoint( $settings_enpoint, 'DELETE',
                array( $settings_controller, 'delete' ),
                'public',
                array(
                    'id' => array(
                        'type'     => 'string:integer',
                        'required' => true,
                    ),
                )
            ),
            new RestApiEndpoint( 'countdowns/last/settings', 'GET',
                array( $settings_controller, 'get_last_one' ),
                'public',
                array()
            ),

        );

        $routes = new RestApiRoutes( 'clockdown', 'v1', $endpoints_v1 );

        $routes_service->add_routes( $routes );

    }

}
