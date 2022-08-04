<?php

namespace Clockdown\Client\Backend\Api\V1\CountdownSettings;

use Clockdown\App\Common\Error;
use Clockdown\App\Services\Database\DatabaseResponseError;
use Clockdown\App\Services\Database\DatabaseResponseNotAffected;
use Clockdown\App\Services\Database\DatabaseResponseNotFound;

class CountdownSettingsService {
    /**
     * @var CountdownSettingsRepository
     */
    protected $repository;

    /**
     * Singleton instance.
     *
     * @var CountdownSettingsService
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownSettingsService
     */
    public static function singletone( CountdownSettingsRepository $repository ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownSettingsService( $repository );
        }

        return self::$instance;
    }

    public function __construct( CountdownSettingsRepository $repository ) {
        $this->repository = $repository;
    }

    /**
     * Insert new settings for a countdown.
     *
     * @param array $new_settings
     * @return integer|Error The ID of new Countdown created or Error
     */
    public function insert( array $new_settings ) {

        $result = $this->repository->insert( $new_settings );

        if ( $result instanceof DatabaseResponseError || $result instanceof DatabaseResponseNotAffected ) {
            return new Error(
                'countdown_insert_error',
                'Error while inserting new countdown',
                $result->get_message()
            );

        }

        return $result->get_payload()['id'];

    }

    /**
     * Update the settings for a countdown.
     *
     * @param string $next_settings The new countdown settings
     * @param integer $countdown_id
     * @return boolean|Error True if the update was successful or Error
     */
    public function update( string $next_settings, int $countdown_id ) {

        $result = $this->repository->update(
            $next_settings,
            $countdown_id

        );

        if ( $result instanceof DatabaseResponseError || $result instanceof DatabaseResponseNotAffected ) {
            return new Error(
                'countdown_settings_update_error',
                'Error while updating new countdown',
                $result->get_message()
            );
        }

        return true;

    }

    /**
     * Delete countdown settings by ID.
     *
     * @param integer $countdown_id
     * @return boolean|Error True if the deletion was successful or Error
     */
    public function delete( int $countdown_id ) {

        $result = $this->repository->delete( $countdown_id );

        if ( $result instanceof DatabaseResponseError || $result instanceof DatabaseResponseNotAffected ) {
            return new Error(
                'countdown_settings_delete_error',
                'Error while deleting new countdown',
                $result->get_message()
            );
        }

        return true;

    }

    /**
     * Get the settings by countdown ID.
     *
     * @param integer $countdown_id
     * @return boolean|array|Error The countdown data if was successful, false if not found or Error
     */
    public function find_by_id( int $countdown_id ) {

        $result = $this->repository->find_by_id( $countdown_id );

        if ( $result instanceof DatabaseResponseError ) {
            return new Error(
                'countdown_settings_findById_error',
                'Error while getting the countdown',
                $result->get_message()
            );
        }

        if ( $result instanceof DatabaseResponseNotFound ) {
            return false;
        }

        return $result->get_payload();

    }

}
