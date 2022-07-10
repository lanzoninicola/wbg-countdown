<?php

namespace Clockdown\Backend\Modules\CountdownWidget;

use Clockdown\Backend\App\Common\Shortcode;

class CountdownWidgetShortcode {

    /**
     * Shortcode Wrapper.
     *
     *
     * @param  string[] $function Callback function.
     * @param  array    $atts     Attributes. Default to empty array.
     * @param  array    $wrapper  Customer wrapper data.
     * @return string
     */
    public static function render(
        $atts = array()
    ) {

        // echo '<div>Hello ' . $atts["id"] . 'Pongo</div>';
        echo '<div data-role="clockdown-shortcode" data-id="' . $atts["id"] . '">';
    }

}
