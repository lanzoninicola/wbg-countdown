<?php

namespace Clockdown\Backend\Modules\Api\V1\Factories;

use Clockdown\Backend\App\Services\Database\DatabaseQuery;
use Clockdown\Backend\Modules\Api\V1\Repositories\CountdownsRepository;
use Clockdown\Backend\Modules\Api\V1\Repositories\CountdownsSettingsRepository;

class RepositoriesFactory {

    public static function get_countdowns_repository(): CountdownsRepository {
        $query_service = new DatabaseQuery( 'ckdo', 'countdowns' );
        return CountdownsRepository::singletone( $query_service );
    }

    public static function get_countdowns_settings_repository(): CountdownsSettingsRepository {
        $query_service = new DatabaseQuery( 'ckdo', 'countdowns_settings' );
        return CountdownsSettingsRepository::singletone( $query_service );
    }

}
