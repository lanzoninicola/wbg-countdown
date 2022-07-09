<?php

namespace Clockdown\Backend\App\Common;

class Shortcode {

    /**
     * The name of shortcode
     *
     * @var string
     */
    public $name = '';

    /**
     * This array contains the information to generate the in line <script> tag
     *
     * @var array
     */
    public $inline_script = array();

    /**
     * This array contains the information to generate the in line <link rel="stylesheet"> tag
     *
     * @var array
     */
    public $inline_stylesheet = array();

    /**
     * Undocumented function
     *
     * @param string $name
     *
     */
    public function __construct( string $name ) {

        $this->name = $name;

        $this->add_shortcode();
    }

    public function add_shortcode() {

        add_shortcode( $this->name, array( $this, 'render' ) );
    }

    /**
     * Add the <script> tag under the shortcode html code
     *
     * @param array $inline_script
     * $inline_script = array(
     *    'id'      => '', // the identifier of script tag
     *    'src'     => '', // the source of script tag
     *    'version' => '', // the version of script tag
     *    'defer'   => false, // the defer attribute of script tag
     *    'async'   => false, // the async attribute of script tag
     * );
     */
    public function add_inline_script( array $inline_script = array() ) {

        $this->inline_script['id']      = $inline_script['id'];
        $this->inline_script['src']     = $inline_script['src'];
        $this->inline_script['version'] = isset( $inline_script['version'] ) ? $inline_script['version'] : '1.0.0';
        $this->inline_script['defer']   = isset( $inline_script['defer'] ) ? $inline_script['defer'] : false;
        $this->inline_script['async']   = isset( $inline_script['async'] ) ? $inline_script['async'] : false;
    }

    /**
     * Add the <link rel="stylesheet"> tag under the shortcode html code
     *
     * @param array $inline_stylesheet
     * $inline_stylesheet = array(
     *   'id'      => '', // the identifier of style tag
     *   'href'    => '', // the source of style tag
     *   'version' => '', // the version of style tag
     *   'media'   => 'all', // the media attribute of style tag
     * );
     */
    public function add_inline_stylesheet( array $inline_stylesheet = array() ) {

        $this->inline_stylesheet['id']      = $inline_stylesheet['id'];
        $this->inline_stylesheet['href']    = $inline_stylesheet['href'];
        $this->inline_stylesheet['version'] = isset( $inline_stylesheet['version'] ) ? $inline_stylesheet['version'] : '1.0.0';
        $this->inline_stylesheet['media']   = 'all';
    }

    /**
     * Main function that renders the shortcode.
     *
     * @param  array    $atts     Attributes. Default to empty array.
     * @param  array    $options  Customer options data.
     * @return string
     */
    public function render(
        $callback,
        $atts = array()
    ) {

        ob_start();

// if ( is_callable( $callback ) ) {

//     call_user_func( $callback, $atts );

// }

// if ( !empty( $this->inline_script ) ) {

//     $this->render_script_tag();

// }

// if ( !empty( $this->inline_stylesheet ) ) {

//     $this->render_stylesheet_tag();
        // }

        return ob_get_clean();

    }

    private function render_script_tag() {

        $script = sprintf(
            '<script id="%s" src="%s?ver=%s"</script>',
            $this->inline_script['id'],
            $this->inline_script['src'],
            $this->inline_script['version']
        );

        if ( $this->inline_script['defer'] ) {
            $script = str_replace( '<script', '<script defer', $script );
        }

        if ( $this->inline_script['async'] ) {
            $script = str_replace( '<script', '<script async', $script );
        }

        echo wp_kses_post( $script );

    }

    private function render_stylesheet_tag() {

        $style = sprintf(
            '<link rel="stylesheet" id="%s" href="%s?ver=%s" media="%s">',
            $this->inline_stylesheet['id'],
            $this->inline_stylesheet['href'],
            $this->inline_stylesheet['version'],
            $this->inline_stylesheet['media']
        );

        echo wp_kses_post( $style );
    }

}
