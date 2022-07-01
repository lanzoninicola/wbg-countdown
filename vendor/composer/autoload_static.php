<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1561f8a2c85b74a145afca32e267c7bc
{
    public static $files = array (
        '0269d8cc425e52e7c5a9fdf65f65b92e' => __DIR__ . '/../..' . '/backend/app/functions/admin_menu.php',
    );

    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Clockdown\\Traits\\' => 17,
            'Clockdown\\Services\\' => 19,
            'Clockdown\\Interfaces\\' => 21,
            'Clockdown\\Backend\\PluginCore\\' => 29,
            'Clockdown\\Backend\\Modules\\TemplatesEditor\\' => 42,
            'Clockdown\\Backend\\Modules\\CountdownWidget\\' => 42,
            'Clockdown\\Backend\\Modules\\Api\\Repositories\\' => 43,
            'Clockdown\\Backend\\Modules\\Api\\Models\\' => 37,
            'Clockdown\\Backend\\Modules\\Api\\Factories\\' => 40,
            'Clockdown\\Backend\\Modules\\Api\\Dtos\\' => 35,
            'Clockdown\\Backend\\Modules\\Api\\Controllers\\' => 42,
            'Clockdown\\Backend\\Modules\\Api\\' => 30,
            'Clockdown\\Backend\\App\\Common\\' => 29,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Clockdown\\Traits\\' => 
        array (
            0 => __DIR__ . '/../..' . '/traits',
        ),
        'Clockdown\\Services\\' => 
        array (
            0 => __DIR__ . '/../..' . '/services',
        ),
        'Clockdown\\Interfaces\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/app/interfaces',
        ),
        'Clockdown\\Backend\\PluginCore\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/plugin-core',
        ),
        'Clockdown\\Backend\\Modules\\TemplatesEditor\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/modules/templates-editor',
        ),
        'Clockdown\\Backend\\Modules\\CountdownWidget\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/modules/countdown-widget',
        ),
        'Clockdown\\Backend\\Modules\\Api\\Repositories\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/modules/api/repositories',
        ),
        'Clockdown\\Backend\\Modules\\Api\\Models\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/modules/api/models',
        ),
        'Clockdown\\Backend\\Modules\\Api\\Factories\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/modules/api/factories',
        ),
        'Clockdown\\Backend\\Modules\\Api\\Dtos\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/modules/api/dtos',
        ),
        'Clockdown\\Backend\\Modules\\Api\\Controllers\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/modules/api/controllers',
        ),
        'Clockdown\\Backend\\Modules\\Api\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/modules/api',
        ),
        'Clockdown\\Backend\\App\\Common\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/app/common',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1561f8a2c85b74a145afca32e267c7bc::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1561f8a2c85b74a145afca32e267c7bc::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1561f8a2c85b74a145afca32e267c7bc::$classMap;

        }, null, ClassLoader::class);
    }
}
