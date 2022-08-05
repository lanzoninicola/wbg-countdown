<?php

namespace Clockdown\Client\Config;

use Clockdown\Core\PluginSetup;

class Uninstaller {

    public static function uninstall() {

        $plugin_setup = new PluginSetup();

        $plugin_setup->uninstall();

    }

}
