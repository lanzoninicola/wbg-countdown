<?php

namespace Clockdown;

use Clockdown\Client\Config\Configurator;
use Clockdown\Core\Init;

/**
 * The plugin bootstrap file
 *
 * @wordpress-plugin
 * Plugin Name:       Clockdown
 * Plugin URI:        https://lanzoninicola.com.br
 * Description:       The countdown timer heats the sense of urgency and scarcity, forcing the users as quickly as possible to make a purchase decision. Set the end date, customize it, put the widget in your e-commerce pages and your timer is ready.
 * Version:           1.0.1
 * Author:            Lanzoni Nicola
 * Author URI:        https://lanzoninicola.com.br
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       commerce
 * Domain Path:       /languages
 * @package           Clockdown
 *
 * @link              https://lanzoninicola.com.br
 * @since             1.0.0
 */

// If this file is called directly, abort.

if ( !defined( 'WPINC' ) ) {
    return;
}

/**
 * Autoload files
 */

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
    require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

define( 'CLOCKDOWN_PLUGIN_ID', '1' );
define( 'CLOCKDOWN_PLUGIN_NAME', 'clockdown' );
define( 'CLOCKDOWN_PLUGIN_VERSION', '1.0.1' );
define( 'CLOCKDOWN_PLUGIN_DB_PREFIX', 'ckdo' );
define( 'CLOCKDOWN_PLUGIN_BASE_URL_PATH', plugin_dir_url( __FILE__ ) );
define( 'CLOCKDOWN_TEXT_DOMAIN', 'clockdown' );

register_activation_hook( __FILE__, array( 'Clockdown\Client\Setup\Activator', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'Clockdown\Client\Setup\Deactivator', 'deactivate' ) );
register_uninstall_hook( __FILE__, array( 'Clockdown\Client\Setup\Uninstaller', 'uninstall' ) );

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

    $config = new Configurator();

    $init = new Init( $config );

    $init->run();

}

run_plugin();
