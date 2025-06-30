<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
// route for view no need for auth

// auth route for user to create/edit/delete post