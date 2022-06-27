<?php

namespace Clockdown\PluginCore;

use Clockdown\Modules\Database\CountdownDatabase;

class Uninstaller {

    public static function uninstall() {

        $countdown_database = CountdownDatabase::get_instance();

        if ( $countdown_database->table_exists( 'countdowns' ) ) {
            $countdown_database->drop_table_countdowns();
        }

        if ( $countdown_database->table_exists( 'countdown' ) ) {
            $countdown_database->drop_table_countdowns_settings();
        }

    }

}
