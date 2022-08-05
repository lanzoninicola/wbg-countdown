<?php

namespace Clockdown\Client\Backend\Api\V1\Countdowns;

use Clockdown\App\Services\Database\DatabaseHelpers;
use Clockdown\App\Services\Database\DatabaseQueryInterface;
use Clockdown\App\Services\Database\DatabaseResponse;
use function Clockdown\get_plugin_db_prefix;

class CountdownsRepository {

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
     * @var CountdownsRepository
     */
    protected static $instance = null;

    /**
     * Instantiate the singleton.
     *
     * @return CountdownsRepository
     */
    public static function singletone( DatabaseQueryInterface $query_service ) {

        if ( self::$instance === null ) {
            self::$instance = new CountdownsRepository( $query_service );
        }

        return self::$instance;
    }

    public function __construct( DatabaseQueryInterface $query_service ) {
        $this->query_service = $query_service;
        $this->table_name    = DatabaseHelpers::get_table_fullname( get_plugin_db_prefix(), 'countdowns' );

    }

    /**
     * Create the model and insert a record in the table countdowns.
     *
     * @param array $data
     * @return DatabaseResponse DatabaseResponseError|DatabaseResponseNotAffected|DatabaseResponseSuccess
     */
    public function insert( string $name, string $description ): DatabaseResponse {

        return $this->query_service->insert_row(
            $this->table_name,
            array(
                'name'        => $name,
                'description' => $description,
            )
        );

    }

    /**
     *
     * @param string $name
     * @param string $description
     * @param int $id The id of the record to update.
     *
     * @return DatabaseResponse DatabaseResponseError|DatabaseResponseNotAffected|DatabaseResponseSuccess
     */
    public function update( string $name, string $description, int $id ) {

        $updated_countdown = array(
            'name'        => $name,
            'description' => $description,
            'updated_at'  => date( 'Y-m-d H:i:s' ),
        );

        return $this->query_service->update_row(
            $this->table_name,
            $updated_countdown,
            array( 'id' => $id ),
            array(),
            array()
        );

    }

    /**
     *
     * @param integer $id
     * @return DatabaseResponse DatabaseResponseError|DatabaseResponseNotAffected|DatabaseResponseSuccess
     */
    public function delete( int $id ) {

        return $this->query_service->delete_row( $this->table_name, array( 'id' => $id ) );

    }

    /**
     * Get the list of countdowns.
     *
     * @param int The id of the countdown to find.
     * @return DatabaseResponse DatabaseResponseError|DatabaseResponseEmpty|DatabaseResponseSuccess
     */
    public function find_all() {

        return $this->query_service->get_all_rows( $this->table_name );

    }

    /**
     * Search a countdown by id.
     *
     * @param int The id of the countdown to find.
     * @return DatabaseResponse DatabaseResponseError|DatabaseResponseNotFound|DatabaseResponseSuccess
     */
    public function find_by_id( int $id ) {

        return $this->query_service->get_row( $this->table_name, "id = {$id}" );

    }

}
