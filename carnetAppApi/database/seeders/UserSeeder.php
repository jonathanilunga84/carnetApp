<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'id' => 1,
                'role_id' => '1',                
                'nom' => 'Jean',
                'prenom' => 'Glaude',
                'sexe' => 'M',
                'telephone' => '0811748411',
                'email' => 'super@gmail.com',
                'pseudo' => 'super@gmail.com',
                'password' => Hash::make(1234)
            ],
            [
                'id' => 2,
                'role_id' => '2',                
                'nom' => 'Jean',
                'prenom' => 'Glaude',
                'sexe' => 'M',
                'telephone' => '+243 811748411',
                'email' => 'admin@gmail.com',
                'pseudo' => 'admin@gmail.com',
                'password' => Hash::make(1234)
            ]
        ]);
        
    }
}
