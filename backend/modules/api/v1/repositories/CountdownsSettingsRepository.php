<?php

namespace Clockdown\Backend\Modules\Api\V1\Repositories;

use Clockdown\Backend\App\Services\Database\DatabaseHelpers;
use Clockdown\Backend\App\Services\Database\DatabaseQueryInterface;

class CountdownsSettingsRepository {

    /**
     * Query service.
     *
     * @var DatabaseQueryInterface
     */
    private $query_service;

    /**
     * The name of the table
     *
     * @param string $table_name
     */
    private $table_name;

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
    public static function singletone( DatabaseQueryInterface $query_service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsSettingsRepository( $query_service );
        }

        return self::$instance;
    }

    public function __construct( DatabaseQueryInterface $query_service ) {
        $this->query_service = $query_service;
        $this->table_name    = DatabaseHelpers::get_table_fullname( CLOCKDOWN_PLUGIN_DB_PREFIX, 'countdowns_settings' );
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

        return $this->query_service->insert_row( $this->table_name, $countdown_settings );

    }

    public function update( array $data, int $id ) {
        $updated_countdown = array(
            'settings'   => $data['settings'],
            'updated_at' => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->update_row( $this->table_name, $updated_countdown, array( 'countdown_id' => $id ) );
    }

    public function delete( int $id ) {

        return $this->query_service->delete_row( $this->table_name, array( 'countdown_id' => $id ) );
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

        return $this->query_service->get_all_rows( $this->table_name );
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

        return $this->query_service->get_row( $this->table_name, "countdown_id = {$id}" );

    }

}
