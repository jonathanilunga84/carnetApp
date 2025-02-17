<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            [
                'id' => 1, 
                'nom' => 'Super Admin',
                
            ],
            [
                'id' => 2, 
                'nom' => 'Admin',
            ],            
            [
                'id' => 9, 
                'nom' => 'Autres',
            ],
        ]);
    }
}
