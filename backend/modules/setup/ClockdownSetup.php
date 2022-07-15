<?php

namespace Clockdown\Backend\Modules\Setup;

use Clockdown\Backend\App\Services\Setup\PluginSetup;
use Clockdown\Backend\App\Services\Setup\PluginSetupInterface;

class ClockdownSetup implements PluginSetupInterface {

    /**
     * Object responsible for the plugin setup.
     *
     * @var PluginSetup
     */
    private $plugin_setup;

    public function __construct() {

        $this->plugin_setup = new PluginSetup(
            CLOCKDOWN_PLUGIN_NAME,
            CLOCKDOWN_PLUGIN_DB_PREFIX,
            CLOCKDOWN_PLUGIN_VERSION
        );

        $this->define_db_schema();

    }

    public function define_db_schema(): void {

        $tables = array(
            'countdowns'          => "CREATE TABLE `%table_name%` (
                id INT NOT NULL AUTO_INCREMENT,
                name varchar(255) NOT NULL,
                description varchar(255) NOT NULL,
                created_at datetime NULL,
                updated_at datetime NULL,
                PRIMARY KEY  (id)
                ) %charset_collate%;",
            'countdowns_settings' => "CREATE TABLE `%table_name%` (
                id INT NOT NULL AUTO_INCREMENT,
                countdown_id varchar(255) NOT NULL,
                settings LONGTEXT NULL,
                created_at datetime NULL,
                updated_at datetime NULL,
                PRIMARY KEY  (id)
                -- INDEX countdown_id_idx (countdown_id ASC) VISIBLE,
                ) %charset_collate%;",
        );

        $this->plugin_setup->define_db_schema( $tables );

    }

    /**
     * Execute the plugin setup.
     *
     * @return void
     */
    public function install(): void {

        $this->plugin_setup->install();
    }

    /**
     * Uninstall the plugin.
     *
     * @return void
     */
    public function uninstall(): void {

        $this->plugin_setup->uninstall();
    }

}
