<?php

namespace WBGCountdown\Modules\Api\Factories;

use WBGCountdown\Modules\Api\Repositories\CountdownsRepository;
use WBGCountdown\Modules\Api\Repositories\CountdownsSettingsRepository;
use WBGCountdown\Modules\Database\CountdownsQueryService;
use WBGCountdown\Modules\Database\CountdownsSettingsQueryService;

class RepositoriesFactory {

    public static function get_countdowns_repository(): CountdownsRepository {
        $query_service = CountdownsQueryService::get_instance();
        return CountdownsRepository::get_instance( $query_service );
    }

    public static function get_countdowns_settings_repository(): CountdownsSettingsRepository {
        $query_service = CountdownsSettingsQueryService::get_instance();
        return CountdownsSettingsRepository::get_instance( $query_service );
    }

}
