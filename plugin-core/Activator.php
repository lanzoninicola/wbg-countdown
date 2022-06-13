<?php

namespace WBGCountdown\PluginCore;

use WBGCountdown\Modules\Database\CountdownsQueryService;
use WBGCountdown\Modules\Database\CountdownsSettingsQueryService;

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

        $countdowns_query_service = CountdownsQueryService::get_instance();
        $countdowns_query_service->create_table();

        $countdowns_settings_query_service = CountdownsSettingsQueryService::get_instance();
        $countdowns_settings_query_service->create_table();

    }

}
