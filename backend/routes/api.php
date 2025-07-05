<?php

use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;



// public routes (for all)
Route::get(uri: '/posts', action: [PostController::class, 'index']);
Route::get(uri: '/posts/{post}', action: [PostController::class, 'show']);

// user auth route(for login/logout)
Route::post('/login',[AuthController::class,'login']);


// middleware routes (all logged-in users)
Route::middleware('auth:sanctum')->group(function () {
    // all user route for blog crud
    Route::post('/posts', [PostController::class, 'store']);

    Route::put('/posts/{post}', [PostController::class, 'update']);

    Route::delete('/posts/{post}', [PostController::class, 'deletePost']);

    Route::post('/logout' , [AuthController::class,'logout']);


    //owner only route
    Route::middleware('owner.only')->group(function () {
        // owner create user route
        Route::post('/register', [AuthController::class, 'register']);

        // get all user
        Route::get('/users', [AuthController::class, 'index']);

        // owner delete user route
        Route::delete('/users/{user}', [AuthController::class, 'deleteUser']);
    });
});
// auth route for user to create/edit/delete post