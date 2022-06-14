<?php

namespace WBGCountdown\Modules\Api\Models;

class CountdownSettingsModel extends BaseModel {

    private int $id;

    private int $countdown_id;

    private string $settings;

    private \DateTime $created_at;

    private \DateTime $updated_at;

    public function __construct( int $id, int $countdown_id, string $settings, ?\DateTime $created_at = null, ?\DateTime $updated_at = null ) {
        $this->id           = $id;
        $this->countdown_id = $countdown_id;
        $this->settings     = $settings;

        if ( $created_at === null ) {
            $this->created_at = new \DateTime();
        } else {
            $this->created_at = $created_at;
        }

        if ( $updated_at === null ) {
            $this->updated_at = new \DateTime();
        } else {
            $this->updated_at = $updated_at;
        }

    }

    public function get_id(): int {
        return $this->id;
    }

    public function get_countdown_id(): int {
        return $this->countdown_id;
    }

    public function get_settings(): string {
        return $this->settings;
    }

    public function get_created_date(): \DateTime {
        return $this->created_at;
    }

    public function get_updated_date(): \DateTime {
        return $this->updated_at;
    }

    public function set_countdown_id( int $countdown_id ): void {
        $this->countdown_id = $countdown_id;
    }

    public function set_settings( string $settings ): void {
        $this->settings = $settings;
    }

    public function set_created_date( \DateTime $created_at ): void {
        $this->created_at = $created_at;
    }

    public function to_array( array $exclude_fields = array() ): array{

        $array = array(
            'id'           => $this->id,
            'countdown_id' => $this->countdown_id,
            'settings'     => $this->settings,
            'created_at'   => $this->created_at->format( 'Y-m-d H:i:s' ),
            'updated_at'   => $this->updated_at->format( 'Y-m-d H:i:s' ),
        );

        if ( !empty( $exclude_fields ) ) {

            foreach ( $exclude_fields as $field ) {
                unset( $array[$field] );
            }

        }

        return $array;

    }

    public static function from_array( array $array ): CountdownSettingsModel {
        return new CountdownSettingsModel(
            $array['id'],
            $array['countdown_id'],
            $array['settings'],
            $array['created_at'],
            $array['updated_at']
        );
    }

}
