<?php

namespace Clockdown\Client\Backend\Api\V1\CountdownSettings;

use Clockdown\App\Services\Database\DatabaseQuery;

class CountdownSettingsControllerFactory {

    /**
     * @return CountdownsController
     */
    public static function create() {

        $query_service = DatabaseQuery::singletone();

        $repository = CountdownSettingsRepository::singletone( $query_service );
        $service    = new CountdownSettingsService( $repository );
        return CountdownSettingsController::singletone( $service );
    }
}