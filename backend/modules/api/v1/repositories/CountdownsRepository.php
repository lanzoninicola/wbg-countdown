<?php

namespace Clockdown\Backend\Modules\Api\V1\Repositories;

use Clockdown\Backend\App\Services\Database\DatabaseTableQueryInterface;

class CountdownsRepository {

    /**
     * Query service.
     *
     * @var DatabaseTableQueryInterface
     */
    private $query_service;

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
    public static function singletone( DatabaseTableQueryInterface $query_service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsRepository( $query_service );
        }

        return self::$instance;
    }

    public function __construct( DatabaseTableQueryInterface $query_service ) {
        $this->query_service = $query_service;

    }

    /**
     * Create the model and insert a record in the table countdowns.
     *
     * @param array $data
     * @return DatabaseResponse
     */
    public function insert( array $data ) {

        $countdown = array(
            'id'          => 0,
            'name'        => $data['name'],
            'description' => $data['description'],
            'created_at'  => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->insert_row( $countdown );

    }

    public function update( array $data, int $id ) {

        $updated_countdown = array(
            'name'        => $data['name'],
            'description' => $data['description'],
            'updated_at'  => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->update_row( $updated_countdown, array( 'id' => $id ) );

    }

    public function delete( int $id ) {

        return $this->query_service->delete_row( array( 'id' => $id ) );

    }

    /**
     * Get the list of countdowns.
     * If found return the DatabaseResponseSuccess object that contains the Countdown model.
     * If not found return the DatabaseResponseError object.
     *
     * @param int The id of the countdown to find.
     * @return DatabaseResponse
     */
    public function find_all() {

        return $this->query_service->get_all_rows();

    }

    /**
     * Search a countdown by id.
     * If found return the DatabaseResponseSuccess object that contains the Countdown model.
     * If not found return the DatabaseResponseError object.
     *
     * @param int The id of the countdown to find.
     * @return DatabaseResponse
     */
    public function find_by_id( int $id ) {

        return $this->query_service->get_row( "id = {$id}" );

    }

}
