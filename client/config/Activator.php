<?php

namespace Clockdown\Client\Config;

use Clockdown\Core\PluginSetup;
use function Clockdown\get_plugin_db_prefix;
use function Clockdown\get_plugin_id;
use function Clockdown\get_plugin_name;
use function Clockdown\get_plugin_version;

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @package    Clockdown
 * @subpackage Clockdown/includes
 *
 * @author     Lanzoni Nicola <lanzoni.nicola@gmail.com>
 *
 * @since      1.0.0
 */
class Activator {

    /**
     * Short Description. (use period)
     *
     * Long Description.
     *
     * @since    1.0.0
     */
    public static function activate() {

        $plugin_setup = new PluginSetup(
            get_plugin_name(),
            get_plugin_db_prefix(),
            get_plugin_version(),
            get_plugin_id()
        );

        $tables = array(
            'countdowns'          => "CREATE TABLE `%table_name%` (
                id INT NOT NULL AUTO_INCREMENT,
                name varchar(255) NOT NULL,
                description varchar(255) NOT NULL,
                created_at datetime NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at datetime NULL,
                PRIMARY KEY  (id)
                ) %charset_collate%;",
            'countdowns_settings' => "CREATE TABLE `%table_name%` (
                id INT NOT NULL AUTO_INCREMENT,
                countdown_id varchar(255) NOT NULL,
                settings LONGTEXT NULL,
                created_at datetime NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at datetime NULL,
                PRIMARY KEY  (id)
                ) %charset_collate%;",
        );

        $plugin_setup->define_db_schema( $tables );

        $plugin_setup->install();

    }

}
