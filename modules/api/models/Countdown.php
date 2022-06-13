<?php

namespace WBGCountdown\Modules\Api\Models;

class Countdown extends BaseModel {

    private int $id;

    private string $name;

    private string $description;

    private \DateTime $created_date;

    private \DateTime $updated_date;

    public function __construct( int $id, string $name, string $description, \DateTime $created_date, \DateTime $updated_date ) {
        $this->id           = $id;
        $this->name         = $name;
        $this->description  = $description;
        $this->created_date = $created_date;
        $this->updated_date = $updated_date;
    }

    public function get_id(): int {
        return $this->id;
    }

    public function get_name(): string {
        return $this->name;
    }

    public function get_description(): string {
        return $this->description;
    }

    public function get_created_date(): \DateTime {
        return $this->created_date;
    }

    public function get_updated_date(): \DateTime {
        return $this->updated_date;
    }

    public function set_name( string $name ): void {
        $this->name = $name;
    }

    public function set_description( string $description ): void {
        $this->description = $description;
    }

    public function set_created_date( \DateTime $created_date ): void {
        $this->created_date = $created_date;
    }

    public function set_updated_date( \DateTime $updated_date ): void {
        $this->updated_date = $updated_date;
    }

    public function to_array( array $exclude_fields = array() ): array{

        $array = array(
            'id'           => $this->get_id(),
            'name'         => $this->get_name(),
            'description'  => $this->get_description(),
            'created_date' => $this->get_created_date()->format( 'Y-m-d H:i:s' ),
            'updated_date' => $this->get_updated_date()->format( 'Y-m-d H:i:s' ),
        );

        if ( !empty( $exclude_fields ) ) {

            foreach ( $exclude_fields as $field ) {
                unset( $array[$field] );
            }

        }

        return $array;
    }

    public static function from_array( array $array ): Countdown {
        return new Countdown(
            $array['id'],
            $array['name'],
            $array['description'],
            \DateTime::createFromFormat( 'Y-m-d H:i:s', $array['created_date'] ),
            \DateTime::createFromFormat( 'Y-m-d H:i:s', $array['updated_date'] )
        );
    }

}
