<?php

namespace Clockdown\Backend\PluginCore;

class ShortcodesLoader {

    /**
     * The array that contains the shortcodes.
     *
     * @var array
     *
     * @example - $shortcodes  = array(
     *    shortcode_name => related_class_contains_output(),
     * );
     */
    private $shortcodes = array();

    /**
     * The array that contains the information of the inline script for each shortcode.
     *
     * @example - $inline_scripts = array(
     *    shortcode_name => script_info[],
     * );
     *
     * @since    1.0.0
     */
    private $shortcode_scripts = array();

    /**
     * The array that contains the information of the inline stylesheet for each shortcode.
     *
     * @example - $inline_scripts = array(
     *    shortcode_name => stylesheet_info[],
     * );
     *
     * @since    1.0.0
     */
    private $shortcode_stylesheets = array();

    /**
     * Add the shortcode to the collection.
     *
     * @param string $name The name of the shortcode.
     * @param string $class_name The class name of the shortcode containing the output() method.
     * The class must be passed in this format Classname::class
     * @return void
     */
    public function add( string $name, string $class_name ) {

        $this->shortcodes[$name] = $class_name;
    }

    /**
     * Register the information for the script tag that will added under the shortcode html code
     *
     * @param string $name The name of the shortcode.
     * @param array $inline_script
     * $inline_script = array(
     *    'id'      => '', // the identifier of script tag
     *    'src'     => '', // the source of script tag
     *    'ver'     => '', // the version of script tag
     *    'defer'   => false, // the defer attribute of script tag
     *    'async'   => false, // the async attribute of script tag
     * );
     */
    public function add_inline_script( string $name, array $inline_script = array() ) {

        $this->shortcode_scripts[$name] = array(
            'id'    => $inline_script['id'],
            'src'   => $inline_script['src'],
            'ver'   => isset( $inline_script['ver'] ) ? $inline_script['ver'] : '1.0.0',
            'defer' => isset( $inline_script['defer'] ) ? $inline_script['defer'] : false,
            'async' => isset( $inline_script['async'] ) ? $inline_script['async'] : false,
        );
    }

    /**
     * Register the information for the link rel="stylesheet" tag that will added above the shortcode html code
     *
     * @param string $name The name of the shortcode.
     * @param array $inline_stylesheet
     * $inline_stylesheet = array(
     *   'id'      => '', // the identifier of style tag
     *   'href'    => '', // the source of style tag
     *   'ver'     => '', // the version of style tag
     *   'media'   => 'all', // the media attribute of style tag
     * );
     */
    public function add_inline_stylesheet( string $name, array $inline_stylesheet = array() ) {

        $this->shortcode_stylesheets[$name] = array(
            'id'    => $inline_stylesheet['id'],
            'href'  => $inline_stylesheet['href'],
            'ver'   => isset( $inline_stylesheet['ver'] ) ? $inline_stylesheet['ver'] : '1.0.0',
            'media' => isset( $inline_stylesheet['media'] ) ? $inline_stylesheet['media'] : 'all',
        );

    }

    /**
     * Bootstraps the shortcodes registered.
     *
     * @return void
     */
    public function run() {

        foreach ( $this->shortcodes as $name => $class_name ) {

            // Instantiate the shortcode class that contain the add_shortcode() wp method
            $shortcode = new $class_name( $name );

            if ( !method_exists( $shortcode, 'output' ) ) {
                throw new \Exception( 'The class ' . $class_name . ' must extends the Shortcode class and contain the output() method.' );
            }

            if ( isset( $this->shortcode_scripts[$name] ) ) {

                $shortcode->register_script( $this->shortcode_scripts[$name] );
            }

            if ( isset( $this->shortcode_stylesheets[$name] ) ) {

                $shortcode->register_stylesheet( $this->shortcode_stylesheets[$name] );
            }

        }

    }

}
