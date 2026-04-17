<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reisNudeln = Category::where('slug', 'reis-nudeln')->first();
        $saucen = Category::where('slug', 'saucen')->first();

        Product::create([
            'category_id' => $reisNudeln->id,
            'name' => 'Royal Thai - Jasmin-Duftreis 4,5 kg',
            'slug' => Str::slug('Royal Thai - Jasmin-Duftreis 4,5 kg'),
            'price' => 12.75,
            'stock' => 10,
            'images' => [
                'images/products/royal-thai-jasmin-duftreis-4-5kg/main.jpg',
            ],
            'description' => 'Duftender Jasminreis im 4,5kg Sack.',
        ]);

        Product::create([
            'category_id' => $saucen->id,
            'name' => 'Flying Goose - Scharfe Srirachasauce 455 ml',
            'slug' => Str::slug('Flying Goose - Scharfe Srirachasauce 455 ml'),
            'price' => 3.85,
            'stock' => 5,
            'images' => [
                'images/products/flying-goose-sriracha-455ml/main.jpg',
            ],
            'description' => 'Zum Verfeinern und würzen von Gerichten jeglicher Art',
        ]);

    }
}
