<?php

namespace Clockdown\Backend\Modules\API\Factories;

use Clockdown\Backend\Modules\Api\Controllers\CountdownsController;
use Clockdown\Backend\Modules\Api\Controllers\CountdownsSettingsController;
use Clockdown\Backend\Modules\Database\Factories\RepositoriesFactory;

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
            return self::get_countdowns_settings_controller();
        }

    }

    public static function get_countdowns_controller(): CountdownsController {
        $repository = RepositoriesFactory::get_countdowns_repository();
        return CountdownsController::get_instance( $repository );
    }

    public static function get_countdowns_settings_controller(): CountdownsSettingsController {
        $repository = RepositoriesFactory::get_countdowns_settings_repository();
        return CountdownsSettingsController::get_instance( $repository );
    }

}
