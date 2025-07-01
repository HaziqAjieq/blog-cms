<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User


class Post extends Model
{
     //create dummy post with factories
    use HasFactory;
    protected $fillable =[
        'title' ,
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'status',
        'published_at',
        'views_count',
        'meta_data',
        'user_id',
        'category_id',
    ];

    // Automatically cast fields to proper types
    protected $cast =[
        'published_at' => 'datetime',
        'views_count' => 'integer',
        'meta_data' => 'array',
    ];

    // get to a user (author for the post)
    public function user(){
        return $this->belongsTo(User::class);
    }



    // Post belong to a category
    public function category(){
        return $this->belongsTo(Category::class);
    }

    // Tags for post
    public function tags(){
        return $this->belongsToMany(Tag::class,'post_tags');
    }

    // post may have many media files

    public function media(){
        return $this->hasMany(Media::class);
    }
   
}
