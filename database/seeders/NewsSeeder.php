<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * @return Void
     */
    public function run(): Void
    {
        News::factory()->count(50)->create();
    }
}
