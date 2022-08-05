<?php

namespace Clockdown\Client\Config;

use Clockdown\Core\PluginSetup;
use function Clockdown\get_plugin_db_prefix;
use function Clockdown\get_plugin_id;
use function Clockdown\get_plugin_name;
use function Clockdown\get_plugin_version;

class Uninstaller {

    public static function uninstall() {

        $plugin_setup = new PluginSetup(
            get_plugin_name(),
            get_plugin_db_prefix(),
            get_plugin_version(),
            get_plugin_id()
        );

        $plugin_setup->uninstall();

    }

}
