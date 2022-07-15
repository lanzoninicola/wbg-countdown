<?php

namespace Clockdown\Backend\PluginCore;

use Clockdown\Backend\App\Services\Database\DatabaseTableSchema;

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

        $this->countdowns();

        $countdowns_settings = new DatabaseTableSchema( 'ckdo', 'countdown_settings' );

        // $countdown_repository = RepositoriesFactory::get_countdowns_repository();
        // $countdown_repository->create_table();

        // $countdown_settings_repository = RepositoriesFactory::get_countdowns_settings_repository();
        // $countdown_settings_repository->create_table();

    }

    private function countdowns() {
        $countdowns = new DatabaseTableSchema( 'ckdo', 'countdowns' );
        

        $sql = "CREATE TABLE `{$table_name}` (
                id INT NOT NULL AUTO_INCREMENT,
                name varchar(255) NOT NULL,
                description varchar(255) NOT NULL,
                created_at datetime NULL,
                updated_at datetime NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";

        $countdowns->create_table();

        $sql = "CREATE TABLE `{$table_name}` (
                id INT NOT NULL AUTO_INCREMENT,
                countdown_id varchar(255) NOT NULL,
                settings LONGTEXT NULL,
                created_at datetime NULL,
                updated_at datetime NULL,
                PRIMARY KEY  (id)
                -- INDEX countdown_id_idx (countdown_id ASC) VISIBLE,
                ) $charset_collate;";

    }
}
