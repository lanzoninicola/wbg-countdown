<?php

namespace WBGCountdown\Modules\Api\Repositories;

class CountdownsRepository {

    /**
     * Singleton instance.
     *
     * @var CountdownsRepository
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsRepository
     */
    public static function get_instance() {

        if ( is_null( self::$instance ) ) {
            self::$instance = new CountdownsRepository();
        }

        return self::$instance;
    }

    public function findAll() {

        return 'urra from repository';
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
