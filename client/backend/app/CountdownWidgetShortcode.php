<?php

namespace Clockdown\Client\Backend\App;

use Clockdown\App\Common\Shortcode;

class CountdownWidgetShortcode extends Shortcode {

    /**
     * The code rendered by the shortcode.
     *
     * @param  array    $atts     Attributes. Default to empty array.
     * @return string
     */
    public static function output(
        $atts = array()
    ) {

        echo '<div data-role="clockdown-shortcode" data-id="' . $atts["id"] . '"></div>';

    }

}
