<?php

namespace WBGCountdown\Modules\Api\Controllers;

class CountdownsController {

    private $post_type = 'wbg_countdown';

    public function findAll() {

        $countdowns = get_posts( array(
            'post_type'   => $this->post_type,
            'numberposts' => -1,
        ) );

        return rest_ensure_response( $countdowns );
    }

    public function findById( $id ) {
        return 'findbyid';
    }

    public function save( $id ) {
        /**
         * @var $wpdb WPDB
         */
        global $wpdb;

        $wpdb->insert(
            $wpdb->prefix . 'wbg_countdown',
            array(
                'title' => 'test',
            ),
            array(
                '%s',
            )
        );

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