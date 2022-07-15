<?php

use Clockdown\Backend\App\Services\Database\DatabaseTableSchema;

class PluginDatabaseSchema {

    public $schema_version = '1.0.0';

    public $tables_version = array();

    public function __construct() {
        $this->define_tables();
    }

    public function define_tables() {
        $this->tables = array(
            'countdowns'         => new DatabaseTableSchema( 'ckdo', 'countdowns' ),
            'countdown_settings' => new DatabaseTableSchema( 'ckdo', 'countdown_settings' ),
        );
    }

    public function create_tables() {

        foreach ( $this->tables as $table => $table_schema ) {
            $table_schema->create_table();
        }

    }

    function update_200_db_version() {
        // WC_Install::update_db_version( '2.0.0' );
    }

}
