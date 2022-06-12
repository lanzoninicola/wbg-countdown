<?php

/**
 * The plugin bootstrap file
 *
 * @wordpress-plugin
 * Plugin Name:       wbg-countdown
 * Plugin URI:        https://lanzoninicola.com.br
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Lanzoni Nicola
 * Author URI:        https://lanzoninicola.com.br
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wbg-countdown
 * Domain Path:       /languages
 * @package           Wbg_Countdown
 *
 * @link              https://lanzoninicola.com.br
 * @since             1.0.0
 */

// If this file is called directly, abort.

if ( !defined( 'WPINC' ) ) {
    die;
}

/**
 * Autoload files
 */

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
    require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

use WBGCountdown\PluginCore\Activator;
use WBGCountdown\PluginCore\Core;
use WBGCountdown\PluginCore\Deactivator;
use WBGCountdown\PluginCore\Uninstaller;

/**
 * Currently plugin version.
 */
define( 'WBG_COUNTDOWN_PLUGIN_NAME', 'wbg-countdown' );

/**
 * Currently plugin version.
 */
define( 'WBG_COUNTDOWN_PLUGIN_VERSION', '1.0.0' );

/**
 * Base path of the plugin.
 */
define( 'WBG_COUNTDOWN_PLUGIN_BASE_URL_PATH', plugin_dir_url( __FILE__ ) );

/**
 * Text domain
 */
define( 'WBG_COUNTDOWN_TEXT_DOMAIN', 'wbg-countdown' );

/**
 * Database tables prefixes
 */
define( 'WBG_COUNTDOWN_TABLE_PREFIXES', 'wbg' );

/**
 * The code that runs during plugin activation.
 * This action is documented in plugin-core/Activator.php
 */
function activate() {
    Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in plugin-core/Deactivator.php
 */
function deactivate() {
    Deactivator::deactivate();
}

/**
 * The code that runs when the plugin is uninstalled.
 * This action is documented in plugin-core/Uninstaller.php
 */
function uninstall() {
    Uninstaller::uninstall();
}

register_activation_hook( __FILE__, 'activate' );
register_deactivation_hook( __FILE__, 'deactivate' );
register_uninstall_hook( __FILE__, 'uninstall' );

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_plugin() {

    /**
     * The core plugin class that is used to define internationalization,
     * admin-specific hooks, and public-facing site hooks.
     */

    $plugin = new Core();
    $plugin->run();

}

run_plugin();
