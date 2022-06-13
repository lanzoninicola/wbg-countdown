<?php

namespace WBGCountdown\Modules\Api\Models;

class CountdownSettings extends BaseModel {

    private int $id;

    private int $countdown_id;

    private string $settings;

    private \DateTime $created_date;

    private \DateTime $updated_date;

    public function __construct( int $id, int $countdown_id, string $settings, \DateTime $created_date, \DateTime $updated_date ) {
        $this->id           = $id;
        $this->countdown_id = $countdown_id;
        $this->settings     = $settings;
        $this->created_date = $created_date;
        $this->updated_date = $updated_date;
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
        return $this->created_date;
    }

    public function get_updated_date(): \DateTime {
        return $this->updated_date;
    }

    public function set_countdown_id( int $countdown_id ): void {
        $this->countdown_id = $countdown_id;
    }

    public function set_settings( string $settings ): void {
        $this->settings = $settings;
    }

    public function set_created_date( \DateTime $created_date ): void {
        $this->created_date = $created_date;
    }

    public function to_array( array $exclude_fields = array() ): array{

        $array = array(
            'id'           => $this->id,
            'countdown_id' => $this->countdown_id,
            'settings'     => $this->settings,
            'created_date' => $this->created_date->format( 'Y-m-d H:i:s' ),
            'updated_date' => $this->updated_date->format( 'Y-m-d H:i:s' ),
        );

        if ( !empty( $exclude_fields ) ) {

            foreach ( $exclude_fields as $field ) {
                unset( $array[$field] );
            }

        }

        return $array;

    }

    public static function from_array( array $array ): CountdownSettings {
        return new CountdownSettings(
            $array['id'],
            $array['countdown_id'],
            $array['settings'],
            $array['created_date'],
            $array['updated_date']
        );
    }

}
