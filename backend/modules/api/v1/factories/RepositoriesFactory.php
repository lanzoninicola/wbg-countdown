<?php

namespace Clockdown\Backend\Modules\Api\V1\Factories;

use Clockdown\Backend\App\Services\Database\DatabaseTableQuery;
use Clockdown\Backend\Modules\Api\V1\Repositories\CountdownsRepository;
use Clockdown\Backend\Modules\Api\V1\Repositories\CountdownsSettingsRepository;

class RepositoriesFactory {

    public static function get_countdowns_repository(): CountdownsRepository {
        $query_service = new DatabaseTableQuery( 'ckdo', 'countdowns' );
        return CountdownsRepository::singletone( $query_service );
    }

    public static function get_countdowns_settings_repository(): CountdownsSettingsRepository {
        $query_service = new DatabaseTableQuery( 'ckdo', 'countdowns_settings' );
        return CountdownsSettingsRepository::singletone( $query_service );
    }

}
