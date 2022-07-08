<?php

namespace Clockdown\Backend\App\Services;

/**
 * An helper class that let you tag your scripts with the "defer" or "async" attribute.
 *
 */
class ScriptLoaderTaggerService {

    /**
     * The handle name used to enqueue the script.
     *
     * @var string
     */
    private $handle;

    /**
     * @param string $handle The handle name used to enqueue the script.
     */
    public function __construct( string $handle ) {
        $this->handle = $handle;
    }

    /**
     * Add the "defer" attribute to the <script> enqueued.
     */
    public function add_defer() {

        add_filter( 'script_loader_tag', array( $this, 'add_defer_attribute' ), 10, 3 );
    }

    /**
     * Add the "async" attribute to the <script> enqueued.
     */
    public function add_async() {

        add_filter( 'script_loader_tag', array( $this, 'add_async_attribute' ), 10, 3 );
    }

    public function add_defer_attribute( $tag, $handle, $src ) {

        if ( strpos( $handle, $this->handle ) !== false ) {

            return str_replace( ' src', ' defer src', $tag );
        }

        return $tag;
    }

    public function add_async_attribute( $tag, $handle, $src ) {

        if ( strpos( $handle, $this->handle ) !== false ) {

            return str_replace( ' src', ' async src', $tag );
        }

        return $tag;
    }

}
