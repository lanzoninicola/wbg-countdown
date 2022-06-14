<?php

namespace WBGCountdown\Modules\Api\Factories;

use WBGCountdown\Modules\Api\Repositories\CountdownsRepository;
use WBGCountdown\Modules\Api\Repositories\CountdownsSettingsRepository;
use WBGCountdown\Services\DatabaseQueryService;

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
