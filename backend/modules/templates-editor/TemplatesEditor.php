<?php

namespace Clockdown\Backend\Modules\TemplatesEditor;

use function Clockdown\Backend\App\Functions\add_submenu;

class TemplatesEditor {

    /**
     *  Add the menu item in the admin menu
     */
    public function add_menu() {

        add_submenu(
            'clockdown',
            __( 'Templates', CLOCKDOWN_TEXT_DOMAIN ),
            'clockdown-templates',
            array(
                'page_title' => __( 'Templates', CLOCKDOWN_TEXT_DOMAIN ),
            )
        );

    }
}
