<?php

namespace Clockdown\Client\Config;

use Clockdown\Core\PluginSetup;

class Uninstaller {

    public static function uninstall() {

        $plugin_setup = new PluginSetup(
            CLOCKDOWN_PLUGIN_NAME,
            CLOCKDOWN_PLUGIN_DB_PREFIX,
            CLOCKDOWN_PLUGIN_VERSION,
            CLOCKDOWN_PLUGIN_ID
        );

        $plugin_setup->uninstall();

    }

}
