<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Reis & Nudeln',
                'image' => 'images/categories/rice.jpg',
            ],
            [
                'name' => 'Saucen',
                'image' => 'images/categories/sauce.jpg',
            ],
            [
                'name' => 'Snacks',
                'image' => '',
            ],
            [
                'name' => 'Getraenke',
                'image' => '',
            ],
            [
                'name' => 'Gewuerze',
                'image' => '',
            ],
        ];

        foreach($categories as $category) {
            Category::create([
                'name' => $category['name'],
                'slug' => Str::slug($category['name']),
                'image' => $category['image'],
            ]);
        }
    }
}
