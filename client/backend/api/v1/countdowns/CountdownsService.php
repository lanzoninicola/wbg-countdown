<?php

namespace Clockdown\Client\Backend\Api\V1\Countdowns;

use Clockdown\App\Common\Error;
use Clockdown\App\Services\Database\DatabaseResponseEmpty;
use Clockdown\App\Services\Database\DatabaseResponseError;
use Clockdown\App\Services\Database\DatabaseResponseNotAffected;
use Clockdown\App\Services\Database\DatabaseResponseNotFound;

class CountdownsService {
    /**
     * @var CountdownsRepository
     */
    protected $repository;

    /**
     * Singleton instance.
     *
     * @var CountdownsService
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsService
     */
    public static function singletone( CountdownsRepository $repository ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsService( $repository );
        }

        return self::$instance;
    }

    public function __construct( CountdownsRepository $repository ) {
        $this->repository = $repository;
    }

    /**
     * Insert a new countdown.
     *
     * @param array $new_countdown
     * @return integer|Error The ID of new Countdown created or Error
     */
    public function insert( array $new_countdown ) {

        $result = $this->repository->insert(
            $new_countdown['name'],
            $new_countdown['description']
        );

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
     * Update the countdown information
     *
     * @param array $next_countdown The new countdown data
     * @param integer $countdown_id
     * @return boolean|Error True if the update was successful or Error
     */
    public function update( array $next_countdown, int $countdown_id ) {

        $result = $this->repository->update(
            $next_countdown['name'],
            $next_countdown['description'],
            $countdown_id
        );

        if ( $result instanceof DatabaseResponseError || $result instanceof DatabaseResponseNotAffected ) {
            return new Error(
                'countdown_update_error',
                'Error while updating new countdown',
                $result->get_message()
            );
        }

        return true;

    }

    /**
     * Delete countdown
     *
     * @param integer $countdown_id
     * @return boolean|Error True if the deletion was successful or Error
     */
    public function delete( int $countdown_id ) {

        $result = $this->repository->delete( $countdown_id );

        if ( $result instanceof DatabaseResponseError || $result instanceof DatabaseResponseNotAffected ) {
            return new Error(
                'countdown_delete_error',
                'Error while deleting new countdown',
                $result->get_message()
            );
        }

        return true;

    }

    /**
     * Undocumented function
     *
     * @return array|Error array of all countdowns or Error
     */
    public function find_all() {

        $result = $this->repository->find_all();

        if ( $result instanceof DatabaseResponseError ) {
            return new Error(
                'countdown_findAll_error',
                'Error while getting all countdowns',
                $result->get_message()
            );
        }

        if ( $result instanceof DatabaseResponseEmpty ) {
            return array();
        }

        return $result->get_payload();

    }

    /**
     * Undocumented function
     *
     * @param integer $countdown_id
     * @return boolean|array|Error The countdown data if was successful, false if not found or Error
     */
    public function find_by_id( int $countdown_id ) {

        $result = $this->repository->find_by_id( $countdown_id );

        if ( $result instanceof DatabaseResponseError ) {
            return new Error(
                'countdown_findById_error',
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
