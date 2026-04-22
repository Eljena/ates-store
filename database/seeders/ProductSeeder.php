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
            'brand' => 'Royal Thai',
            'slug' => Str::slug('Royal Thai - Jasmin-Duftreis 4,5 kg'),
            'price' => 12.75,
            'pricePerKg' => 2.83,
            'stock' => 10,
            'images' => [
                'images/products/royal-thai-jasmin-duftreis-4-5kg/main.jpg',
            ],
            'description' => 'Duftender Jasminreis im 4,5kg Sack.',
        ]);
        
        Product::create([
            'category_id' => $reisNudeln->id,
            'name' => 'Royal Thai - Jasmin-Duftreis 1 kg',
            'brand' => 'Royal Thai',
            'slug' => Str::slug('Royal Thai - Jasmin-Duftreis 1 kg'),
            'price' => 2.85,
            'pricePerKg' => 2.85,
            'stock' => 10,
            'images' => [
                'images/products/royal-thai-jasmin-duftreis-1kg/main.jpg',
            ],
            'description' => 'Duftender Jasminreis im 1kg Sack.',
        ]);
        
        Product::create([
            'category_id' => $reisNudeln->id,
            'name' => 'Golden Turtle Chef - Jasminreis 20 kg',
            'brand' => 'Golden Turtle Chef',
            'slug' => Str::slug('Golden Turtle Chef - Jasminreis 20 kg'),
            'price' => 39.99,
            'pricePerKg' => 2.00,
            'stock' => 10,
            'images' => [
                'images/products/golden-turtle-chef-jasminreis-20kg/main.jpg',
            ],
            'description' => 'Jasminreis im 20kg Sack.',
        ]);
        
        Product::create([
            'category_id' => $reisNudeln->id,
            'name' => 'Baitang - Jasminreis 20 kg',
            'brand' => 'Baitang',
            'slug' => Str::slug('Baitang - Jasminreis 20 kg'),
            'price' => 37.99,
            'pricePerKg' => 1.90,
            'stock' => 10,
            'images' => [
                'images/products/baitang-jasminreis-20kg/main.jpg',
            ],
            'description' => 'Jasminreis im 20kg Sack.',
        ]);
        
        Product::create([
            'category_id' => $reisNudeln->id,
            'name' => 'Viet Nam - Grüne Reisflocken mit Pandan "Com Dep Xanh" 200 g',
            'brand' => 'Viet Nam',
            'slug' => Str::slug('Viet Nam - Grüne Reisflocken mit Pandan "Com Dep Xanh" 200 g'),
            'price' => 1.69,
            'pricePerKg' => 8.45,
            'stock' => 10,
            'images' => [
                'images/products/viet-nam-gruene-reisflocken-mit-pandan-com-dep-xanh-200g/main.jpg',
            ],
            'description' => 'Grüne Reisflocken mit Pandan 200 g aus Vietnam von Viet Nam',
        ]);

        Product::create([
            'category_id' => $saucen->id,
            'name' => 'Flying Goose - Scharfe Srirachasauce 455 ml',
            'brand' => 'Flying Goose',
            'slug' => Str::slug('Flying Goose - Scharfe Srirachasauce 455 ml'),
            'price' => 3.85,
            'pricePerL' => 8.46,
            'stock' => 5,
            'images' => [
                'images/products/flying-goose-sriracha-455ml/main.jpg',
            ],
            'description' => 'Zum Verfeinern und würzen von Gerichten jeglicher Art',
        ]);

    }
}
