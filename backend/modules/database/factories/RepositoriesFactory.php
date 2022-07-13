<?php

namespace Clockdown\Backend\Modules\Database\Factories;

use Clockdown\Backend\App\Services\DatabaseQueryService;
use Clockdown\Backend\Modules\Database\Repositories\CountdownsRepository;
use Clockdown\Backend\Modules\Database\Repositories\CountdownsSettingsRepository;

class RepositoriesFactory {

    public static function get_countdowns_repository(): CountdownsRepository {
        $query_service = new DatabaseQueryService();
        return CountdownsRepository::singletone( $query_service );
    }

    public static function get_countdowns_settings_repository(): CountdownsSettingsRepository {
        $query_service = new DatabaseQueryService();
        return CountdownsSettingsRepository::singletone( $query_service );
    }

}
