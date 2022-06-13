<?php

namespace WBGCountdown\Modules\Api\Controllers;

class CountdownsSettingsController {

    /**
     * Singleton instance.
     *
     * @var CountdownsSettingsController
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsSettingsController
     */
    public static function get_instance( $repository ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsSettingsController( $repository );
        }

        return self::$instance;
    }

    public function findAll() {
        return 'findall';
    }

    public function findById( $id ) {
        return 'findbyid';
    }

    public function save( $id ) {
        return 'save';
    }

    public function delete( $id ) {
        return 'delete';
    }

    public function create( $id ) {
        return 'create';
    }

    public function update( $id ) {
        return 'update';
    }

}
