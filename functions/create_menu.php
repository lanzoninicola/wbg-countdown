<?php

namespace Clockdown\Backend\App\Functions {

    use Clockdown\Services\AdminMenuService;

    function create_menu( string $label, string $slug, array $options = array() ) {
        $admin_menu = AdminMenuService::get_instance();
        $admin_menu->create_admin_menu( $label, $slug, $options );
    }

    function create_submenu( string $parent_slug, string $label, string $slug, array $options = array() ) {
        $admin_menu = AdminMenuService::get_instance();
        $admin_menu->create_admin_submenu( $parent_slug, $label, $slug, $options );
    }
}
