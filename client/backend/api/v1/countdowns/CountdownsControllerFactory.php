<?php

namespace Clockdown\Client\Backend\Api\V1\Countdowns;

use Clockdown\App\Services\Database\DatabaseQuery;

class CountdownsControllerFactory {

    /**
     * @return CountdownsController
     */
    public static function create() {

        $query_service = DatabaseQuery::singletone();

        $repository = CountdownsRepository::singletone( $query_service );
        $service    = new CountdownsService( $repository );
        return CountdownsController::singletone( $service );
    }
}