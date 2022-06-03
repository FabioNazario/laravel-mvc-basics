<?php

use App\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text(100),
        'price' => $faker->randomFloat(2, 1, 1000)
    ];
});
