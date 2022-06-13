<?php

namespace WBGCountdown\Modules\Api\Factories;

use WBGCountdown\Modules\Api\Controllers\CountdownsController;
use WBGCountdown\Modules\Api\Controllers\CountdownsSettingsController;
use WBGCountdown\Modules\Api\Repositories\CountdownsRepository;
use WBGCountdown\Modules\Api\Repositories\CountdownsSettingsRepository;

class ControllersFactory {

    /**
     * Passing a class name, it will return an instance of the class.
     *
     * @param string $class_name
     * @return void
     */
    public static function get_instance_by_class_name( string $class_name ) {

        if ( 'CountdownsController' === $class_name ) {
            return self::get_countdowns_controller();
        }

        if ( 'CountdownsSettingsController' === $class_name ) {
            return self::get_countdowns_controller();
        }

    }

    public static function get_countdowns_controller(): CountdownsController {
        $repository = CountdownsRepository::get_instance();
        return CountdownsController::get_instance( $repository );
    }

    public static function get_countdowns_settings_controller(): CountdownsSettingsController {
        $repository = CountdownsSettingsRepository::get_instance();
        return CountdownsSettingsController::get_instance( $repository );
    }

}
