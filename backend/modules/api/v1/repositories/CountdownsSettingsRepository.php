<?php

namespace Clockdown\Backend\Modules\Api\V1\Repositories;

use Clockdown\Backend\App\Services\Database\DatabaseTableQueryInterface;

class CountdownsSettingsRepository {

    /**
     * Query service.
     *
     * @var DatabaseTableQueryInterface
     */
    private $query_service;

    /**
     * Singleton instance.
     *
     * @var CountdownsSettingsRepository
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsSettingsRepository
     */
    public static function singletone( DatabaseTableQueryInterface $query_service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsSettingsRepository( $query_service );
        }

        return self::$instance;
    }

    public function __construct( DatabaseTableQueryInterface $query_service ) {
        $this->query_service = $query_service;
    }

    /**
     * Insert a record in the table countdowns_settings.
     *
     * @param array $data
     * @return DatabaseResponseSuccess|DatabaseResponseError
     */
    public function insert( array $data ) {

        $countdown_settings = array(
            'id'           => 0,
            'countdown_id' => $data['countdown_id'],
            'settings'     => $data['settings'],
            'created_at'   => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->insert_row( $countdown_settings );

    }

    public function update( array $data, int $id ) {
        $updated_countdown = array(
            'settings'   => $data['settings'],
            'updated_at' => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->update_row( $updated_countdown, array( 'countdown_id' => $id ) );
    }

    public function delete( int $id ) {

        return $this->query_service->delete_row( array( 'countdown_id' => $id ) );
    }

    /**
     * Get the list of countdowns_settings.
     * If found return the DatabaseResponseSuccess object that contains the Countdown model.
     * If not found return the DatabaseResponseError object.
     *
     * @param int The id of the countdown to find.
     * @return DatabaseResponseSuccess|DatabaseResponseError
     */
    public function find_all() {

        return $this->query_service->get_all_rows();
    }

    /**
     * Search a countdowns_settings by id.
     * If found return the DatabaseResponseSuccess object that contains the Countdown model.
     * If not found return the DatabaseResponseError object.
     *
     * // TODO: the function should be returned the CountdownSettings model if success and DatabaseResponseError if failed. Controllers in the API module should be updated and the Shortcode class
     *
     * @param int The id of the countdown to find.
     * @return DatabaseResponseSuccess|DatabaseResponseError
     */
    public function find_by_id( int $id ) {

        return $this->query_service->get_row( "countdown_id = {$id}" );

    }

}
