<?php

namespace WBGCountdown\PluginCore;

use WBGCountdown\Modules\Database\CountdownDatabase;

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @package    Wbg_Countdown
 * @subpackage Wbg_Countdown/includes
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

        $countdown_database = CountdownDatabase::get_instance();

        $countdown_database->create_table_countdowns();
        $countdown_database->create_table_countdowns_settings();

    }

}
