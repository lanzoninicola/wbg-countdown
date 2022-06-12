<?php

class WP_React_Plugin_Foo {

    public $shortcode_name = 'wp_react_public';

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
            'class'  => 'wbg-countdown',
            'before' => null,
            'after'  => null,
        )
    ) {
        ob_start();

        // @codingStandardsIgnoreStart
        echo empty( $wrapper['before'] ) ? '<div id="wbg-countdown-public" class="wbg-countdown">' : $wrapper['before'];
        echo empty( $wrapper['after'] ) ? '</div>' : $wrapper['after'];
        // @codingStandardsIgnoreEnd

        return ob_get_clean();
    }

}

new WP_React_Plugin_Foo();
