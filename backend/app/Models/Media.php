<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable =[
        'filename',
        'original_name',
        'mime_type',
        'path',
        'size',
        'metadata',
        'user_id'
    ];

    // Cast JSON metadata to array automatically
    protected $casts =[
        'metadata' => 'array'
    ];

    

    // no need factorie
}
