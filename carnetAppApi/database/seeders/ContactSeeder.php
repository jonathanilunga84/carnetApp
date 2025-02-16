<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('contacts')->insert([
            [
                'id' => 1,                         
                'noms' => 'Jean Glaude biya',
                'telephone' => '0811748411',
                'mescontacts_id' => '2',       
            ],
            [
                'id' => 2,                         
                'noms' => 'Mwenebatu kenge blaise',
                'telephone' => '0907474859',
                'mescontacts_id' => '2',   
            ]
        ]);
    }
}
