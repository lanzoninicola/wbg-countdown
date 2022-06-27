<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1839a578bc4d9982c7ac16da4e541d6f
{
    public static $files = array (
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
        'a4a119a56e50fbb293281d9a48007e0e' => __DIR__ . '/..' . '/symfony/polyfill-php80/bootstrap.php',
        '667aeda72477189d0494fecd327c3641' => __DIR__ . '/..' . '/symfony/var-dumper/Resources/functions/dump.php',
        'e9146769acb701f4db6dfc049a2af759' => __DIR__ . '/../..' . '/functions/create_menu.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WBGCountdown\\Traits\\' => 20,
            'WBGCountdown\\Services\\' => 22,
            'WBGCountdown\\PluginCore\\' => 24,
            'WBGCountdown\\Modules\\Shortcode\\Inc\\' => 35,
            'WBGCountdown\\Modules\\Shortcode\\' => 31,
            'WBGCountdown\\Modules\\Api\\Repositories\\' => 38,
            'WBGCountdown\\Modules\\Api\\Models\\' => 32,
            'WBGCountdown\\Modules\\Api\\Factories\\' => 35,
            'WBGCountdown\\Modules\\Api\\Dtos\\' => 30,
            'WBGCountdown\\Modules\\Api\\Controllers\\' => 37,
            'WBGCountdown\\Modules\\Api\\' => 25,
            'WBGCountdown\\Modules\\Admin\\' => 27,
            'WBGCountdown\\Interfaces\\' => 24,
            'WBGCountdown\\Inc\\' => 17,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Php80\\' => 23,
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Symfony\\Component\\VarDumper\\' => 28,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WBGCountdown\\Traits\\' => 
        array (
            0 => __DIR__ . '/../..' . '/traits',
        ),
        'WBGCountdown\\Services\\' => 
        array (
            0 => __DIR__ . '/../..' . '/services',
        ),
        'WBGCountdown\\PluginCore\\' => 
        array (
            0 => __DIR__ . '/../..' . '/plugin-core',
        ),
        'WBGCountdown\\Modules\\Shortcode\\Inc\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/shortcode/inc',
        ),
        'WBGCountdown\\Modules\\Shortcode\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/shortcode',
        ),
        'WBGCountdown\\Modules\\Api\\Repositories\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/api/repositories',
        ),
        'WBGCountdown\\Modules\\Api\\Models\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/api/models',
        ),
        'WBGCountdown\\Modules\\Api\\Factories\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/api/factories',
        ),
        'WBGCountdown\\Modules\\Api\\Dtos\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/api/dtos',
        ),
        'WBGCountdown\\Modules\\Api\\Controllers\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/api/controllers',
        ),
        'WBGCountdown\\Modules\\Api\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/api',
        ),
        'WBGCountdown\\Modules\\Admin\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules/admin',
        ),
        'WBGCountdown\\Interfaces\\' => 
        array (
            0 => __DIR__ . '/../..' . '/interfaces',
        ),
        'WBGCountdown\\Inc\\' => 
        array (
            0 => __DIR__ . '/../..' . '/inc',
        ),
        'Symfony\\Polyfill\\Php80\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-php80',
        ),
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Symfony\\Component\\VarDumper\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/var-dumper',
        ),
    );

    public static $classMap = array (
        'Attribute' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/Attribute.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'PhpToken' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/PhpToken.php',
        'Stringable' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/Stringable.php',
        'UnhandledMatchError' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/UnhandledMatchError.php',
        'ValueError' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/ValueError.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1839a578bc4d9982c7ac16da4e541d6f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1839a578bc4d9982c7ac16da4e541d6f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1839a578bc4d9982c7ac16da4e541d6f::$classMap;

        }, null, ClassLoader::class);
    }
}
