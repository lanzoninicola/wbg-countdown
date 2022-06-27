<?php

namespace Clockdown\Modules\Shortcode\Inc;

class CountdownShortcode {

    public $shortcode_name = 'wbg_countdown';

    public function __construct() {

        $this->add_shortcode();
    }

    public function add_shortcode() {

        add_shortcode( $this->shortcode_name, array( $this, 'shortcode_wrapper' ) );
    }

    /**
     * Shortcode Wrapper.
     *
     *
     * @param  string[] $function Callback function.
     * @param  array    $atts     Attributes. Default to empty array.
     * @param  array    $wrapper  Customer wrapper data.
     * @return string
     */
    public static function shortcode_wrapper(
        $wrapper = array(
            'class'  => 'clockdown',
            'before' => null,
            'after'  => null,
        )
    ) {
        ob_start();

        // @codingStandardsIgnoreStart
        echo empty( $wrapper['before'] ) ? '<div id="clockdown-shortcode" class="clockdown">' : $wrapper['before'];
        echo empty( $wrapper['after'] ) ? '</div>' : $wrapper['after'];
        // @codingStandardsIgnoreEnd

        return ob_get_clean();
    }

}
