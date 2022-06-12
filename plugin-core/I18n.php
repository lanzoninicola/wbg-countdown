<?php

namespace WBGCountdown\PluginCore;

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @package    Wbg_Countdown
 * @subpackage PluginCore\I18n
 *
 * @author     Lanzoni Nicola <lanzoni.nicola@gmail.com>
 *
 * @since      1.0.0
 */
class I18n {

    /**
     * Load the plugin text domain for translation.
     *
     * @since    1.0.0
     */
    public function load_plugin_textdomain() {

        load_plugin_textdomain(
            WBG_COUNTDOWN_TEXT_DOMAIN,
            false,
            dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
        );

    }

}
