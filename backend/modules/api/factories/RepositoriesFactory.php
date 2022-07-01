<?php

namespace Clockdown\Backend\Modules\Api\Factories;

use Clockdown\Backend\Modules\Api\Repositories\CountdownsRepository;
use Clockdown\Backend\Modules\Api\Repositories\CountdownsSettingsRepository;
use Clockdown\Services\DatabaseQueryService;

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
