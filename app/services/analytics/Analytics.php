<?php
namespace Clockdown\App\Services\Analytics;

use function Clockdown\get_api_base_url;

class Analytics {

    /**
     * Send data to the analytics server.
     *
     * @param string $endpoint The endpoint to send the data to. This will be appended to "/v1/analytics".
     * @param array $data The data to send.
     *
     * @return array|WP_Error The response or WP_Error on failure.
     */
    public static function send_data( string $endpoint, array $data = array() ) {

        $url = get_api_base_url() . "/v1/analytics{$endpoint}";

        return wp_remote_post(
            $url,
            array(
                'body' => $data,
            )
        );

    }

    /**
     * Get the data from the analytics server.
     *
     * @param string $endpoint The endpoint to get the data from. This will be appended to "/v1/analytics".
     *
     * @return array|WP_Error The response or WP_Error on failure.
     */
    public static function get_data( string $endpoint ) {

        $url = get_api_base_url() . "/v1/analytics{$endpoint}";

        return wp_remote_get(
            $url,
        );
    }

}
