<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit52ea3edaa65e1833e507c367577ec588
{
    public static $files = array (
        'e7da8a496deb2eb70b9646f9fd5fcaac' => __DIR__ . '/../..' . '/app/functions/admin_menu.php',
    );

    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Clockdown\\Core\\' => 15,
            'Clockdown\\Client\\Config\\' => 24,
            'Clockdown\\Client\\Backend\\App\\' => 29,
            'Clockdown\\Client\\Backend\\Api\\V1\\Countdowns\\' => 43,
            'Clockdown\\Client\\Backend\\Api\\V1\\CountdownSettings\\' => 50,
            'Clockdown\\App\\Traits\\' => 21,
            'Clockdown\\App\\Services\\ScriptLocalizer\\' => 39,
            'Clockdown\\App\\Services\\RestApi\\' => 31,
            'Clockdown\\App\\Services\\Logger\\' => 30,
            'Clockdown\\App\\Services\\Database\\' => 32,
            'Clockdown\\App\\Services\\' => 23,
            'Clockdown\\App\\Interfaces\\' => 25,
            'Clockdown\\App\\Functions\\' => 24,
            'Clockdown\\App\\Common\\' => 21,
            'Clockdown\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Clockdown\\Core\\' => 
        array (
            0 => __DIR__ . '/../..' . '/core',
        ),
        'Clockdown\\Client\\Config\\' => 
        array (
            0 => __DIR__ . '/../..' . '/client/config',
        ),
        'Clockdown\\Client\\Backend\\App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/client/backend/app',
        ),
        'Clockdown\\Client\\Backend\\Api\\V1\\Countdowns\\' => 
        array (
            0 => __DIR__ . '/../..' . '/client/backend/api/v1/countdowns',
        ),
        'Clockdown\\Client\\Backend\\Api\\V1\\CountdownSettings\\' => 
        array (
            0 => __DIR__ . '/../..' . '/client/backend/api/v1/countdown-settings',
        ),
        'Clockdown\\App\\Traits\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/traits',
        ),
        'Clockdown\\App\\Services\\ScriptLocalizer\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/services/script-localizer',
        ),
        'Clockdown\\App\\Services\\RestApi\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/services/rest-api',
        ),
        'Clockdown\\App\\Services\\Logger\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/services/logger',
        ),
        'Clockdown\\App\\Services\\Database\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/services/database',
        ),
        'Clockdown\\App\\Services\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/services',
        ),
        'Clockdown\\App\\Interfaces\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/interfaces',
        ),
        'Clockdown\\App\\Functions\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/functions',
        ),
        'Clockdown\\App\\Common\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/common',
        ),
        'Clockdown\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit52ea3edaa65e1833e507c367577ec588::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit52ea3edaa65e1833e507c367577ec588::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit52ea3edaa65e1833e507c367577ec588::$classMap;

        }, null, ClassLoader::class);
    }
}
