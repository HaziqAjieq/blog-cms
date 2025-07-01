<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $fillable =[
        'name',
        'slug',
        'description',
        'color',
        'is_active'
    ];

    // Casts for automatic type conversion
    protected $cast =[
        'is_active' => 'boolean',
    ];

    // Relationshipt if post has many category
    public function posts(){
        return $this->hasMany(Post::class);
    }


    //create a factory later for dummy input
}
