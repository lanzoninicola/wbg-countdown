<?php

namespace Clockdown\Backend\PluginCore;

use Clockdown\Backend\App\Services\Database\DatabaseTableSchema;

class Uninstaller {

    public static function uninstall() {

        $countdowns = new DatabaseTableSchema( 'ckdo', 'countdowns' );
        $countdowns->drop_table();

        $countdowns_settings = new DatabaseTableSchema( 'ckdo', 'countdown_settings' );
        $countdowns_settings->drop_table();

    }

}
