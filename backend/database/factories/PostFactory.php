<?php

namespace Database\Factories;


use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */

class PostFactory extends Factory
{
  
     /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $title = $this->faker->sentence();

        return [
            'title' => $title,
            'slug' => Str::slug($title) . '-' . Str::random(5),
            'excerpt' => $this->faker->paragraph(),
            'content' => $this->faker->paragraphs(3, true),
            'featured_image' => $this->faker->imageUrl(640, 480, 'post'),
            'status' => $this->faker->randomElement(['draft', 'published', 'scheduled']),
            'published_at' => $this->faker->dateTimeBetween('-1 month', '+1 month'),
            'views_count' => $this->faker->numberBetween(0, 1000),
            'meta_data' => [
                'seo_title' => $this->faker->sentence(3),
                'seo_description' => $this->faker->sentence(6),
            ],
            'user_id' => User::inRandomOrder()->first()?->id ?? User::factory(),
            'category_id' => Category::inRandomOrder()->first()?->id ?? Category::factory(),
        ];
    }
}
