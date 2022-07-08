<?php

namespace Clockdown\Backend\Modules\CountdownWidget;

class Shortcode {

    public $shortcode_name = 'clockdown';

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
        $atts = array(),
        $wrapper = array(
            'class'  => 'clockdown',
            'before' => null,
            'after'  => null,
        )
    ) {

        ob_start();

        // @codingStandardsIgnoreStart
        echo empty( $wrapper['before'] ) ? '<div data-role="clockdown-shortcode" data-id="' . $atts["id"] . '">' : $wrapper['before'];
        self::placeholder_template();
        echo empty( $wrapper['after'] ) ? '</div>' : $wrapper['after'];
        // @codingStandardsIgnoreEnd

        return ob_get_clean();
    }

    public static function placeholder_template() {

        $placeholder_url = CLOCKDOWN_PLUGIN_BASE_URL_PATH . 'public/clockdown-widget/assets/placeholder.png';

        ?>

        <div data-role="clockdown-placehoder">
            <img src='<?php echo $placeholder_url ?>' alt="Clockdown Placehoder" width="355px" height="48px">
        </div>

        <?php
}

}
