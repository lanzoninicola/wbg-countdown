<?php

namespace Clockdown\Backend\Modules\Api\V1;

use Clockdown\Backend\App\Common\BaseRoutes;
use Clockdown\Backend\Modules\Api\V1\Factories\ControllersFactory;

/**
 * The class that describe the custom REST API end-points for the countdown.
 *
 * @package    Clockdown
 * @subpackage Clockdown/admin
 *
 * @link       https://lanzoninicola.com.br
 * @since      1.0.0
 */

//TODO: handling wp-nonce
class Routes extends BaseRoutes {

    public function __construct() {

        $endpoints = array(
            'countdowns'                                 => array(
                'GET'  => array(
                    'callback'   => $this->get_callback( 'CountdownsController', 'find_all' ),
                    'capability' => 'public',
                ),
                'POST' => array(
                    'callback'   => $this->get_callback( 'CountdownsController', 'create' ),
                    'capability' => 'public',
                ),
            ),
            "/countdowns/(?P<id>\d+)"                    => array(
                'GET'    => array(
                    'callback'   => $this->get_callback( 'CountdownsController', 'find_by_id' ),
                    'capability' => 'public',
                ),
                'PUT'    => array(
                    'callback'   => $this->get_callback( 'CountdownsController', 'update' ),
                    'capability' => 'public',
                ),
                'DELETE' => array(
                    'callback'   => $this->get_callback( 'CountdownsController', 'delete' ),
                    'capability' => 'public',
                ),
            ),
            "/countdowns/(?P<id>\d+)/countdown-settings" => array(
                'GET'    => array(
                    'callback'   => $this->get_callback( 'CountdownsSettingsController', 'find_by_id' ),
                    'capability' => 'public',
                ),
                'POST'   => array(
                    'callback'   => $this->get_callback( 'CountdownsSettingsController', 'create' ),
                    'capability' => 'public',
                ),
                'PUT'    => array(
                    'callback'   => $this->get_callback( 'CountdownsSettingsController', 'update' ),
                    'capability' => 'public',
                ),
                'DELETE' => array(
                    'callback'   => $this->get_callback( 'CountdownsSettingsController', 'delete' ),
                    'capability' => 'public',
                ),
            ),
        );

        parent::__construct( 'clockdown', 'v1', $endpoints );

    }

    protected function get_callback( string $class_name, string $method_name ) {

        $object = ControllersFactory::get_instance_by_class_name( $class_name );

        return array( $object, $method_name );
    }

}
