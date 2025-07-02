<?php

use App\Http\Controllers\API\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
// route for view no need for auth
// middleware routes (auth routes)


// public routes
Route::get(uri: '/posts',action: [PostController::class,'index']);

Route::get(uri: '/posts/{post}', action: [PostController::class , 'show']);

// auth route for user to create/edit/delete post