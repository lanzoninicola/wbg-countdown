<?php

namespace Clockdown\Backend\Modules\Api\Factories;

use Clockdown\Backend\App\Services\DatabaseQueryService;
use Clockdown\Backend\Modules\Api\Repositories\CountdownsRepository;
use Clockdown\Backend\Modules\Api\Repositories\CountdownsSettingsRepository;

class RepositoriesFactory {

    public static function get_countdowns_repository(): CountdownsRepository {
        $query_service = new DatabaseQueryService();
        return CountdownsRepository::get_instance( $query_service );
    }

    public static function get_countdowns_settings_repository(): CountdownsSettingsRepository {
        $query_service = new DatabaseQueryService();
        return CountdownsSettingsRepository::get_instance( $query_service );
    }

}
