<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('blogs', 'BlogsController@index');
Route::post('blogs/store', 'BlogsController@store');
Route::get('blogs/{id}/show', 'BlogsController@show');
Route::put('blogs/{id}/update', 'BlogsController@update');
Route::get('blogs/{id}/edit', 'BlogsController@edit');
Route::get('blogs/{id}/delete', 'BlogsController@desroy');
