<?php

namespace Clockdown\Modules\Api\Models;

class CountdownModel extends BaseModel {

    private int $id;

    private string $name;

    private string $description;

    private \DateTime $created_at;

    private \DateTime $updated_at;

    public function __construct( int $id, string $name, string $description, ?\DateTime $created_at = null, ?\DateTime $updated_at = null ) {
        $this->id          = $id;
        $this->name        = $name;
        $this->description = $description;

// TODO: need changes
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

    public function get_name(): string {
        return $this->name;
    }

    public function get_description(): string {
        return $this->description;
    }

    public function get_created_date(): \DateTime {
        return $this->created_at;
    }

    public function get_updated_date(): \DateTime {
        return $this->updated_at;
    }

    public function set_name( string $name ): void {
        $this->name = $name;
    }

    public function set_description( string $description ): void {
        $this->description = $description;
    }

    public function set_created_date( \DateTime $created_at ): void {
        $this->created_at = $created_at;
    }

    public function set_updated_date( \DateTime $updated_at ): void {
        $this->updated_at = $updated_at;
    }

    public function to_array( array $exclude_fields = array() ): array{

        $array = array(
            'id'          => $this->get_id(),
            'name'        => $this->get_name(),
            'description' => $this->get_description(),
            'created_at'  => $this->get_created_date()->format( 'Y-m-d H:i:s' ),
            'updated_at'  => $this->get_updated_date()->format( 'Y-m-d H:i:s' ),
        );

        if ( !empty( $exclude_fields ) ) {

            foreach ( $exclude_fields as $field ) {
                unset( $array[$field] );
            }

        }

        return $array;
    }

    public static function from_array( array $array ): CountdownModel {
        return new CountdownModel(
            $array['id'],
            $array['name'],
            $array['description'],
            \DateTime::createFromFormat( 'Y-m-d H:i:s', $array['created_at'] ),
            \DateTime::createFromFormat( 'Y-m-d H:i:s', $array['updated_at'] )
        );
    }

}
