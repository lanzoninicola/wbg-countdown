<?php

namespace Clockdown\Backend\PluginCore;

use Clockdown\Backend\Modules\Api\Factories\RepositoriesFactory;

// TODO: implement the class. Why the database integration depends on the API module (need refactor)?

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

        $countdown_repository = RepositoriesFactory::get_countdowns_repository();
        $countdown_repository->create_table();

        $countdown_settings_repository = RepositoriesFactory::get_countdowns_settings_repository();
        $countdown_settings_repository->create_table();

    }

}
