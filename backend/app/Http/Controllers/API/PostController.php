<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts =  Post::with(['category', 'tags', 'user'])
            ->where('status', 'published')
            ->latest()
            ->paginate(10);

        // rerturn json data
        return response()->json($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        // 
        return response()->json($post->load(['category', 'tags', 'user']));
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'slug' => 'sometimes|string|max:255|unique:posts,slug,' . $post->id,
            'excerpt' => 'sometimes|string',
            'content' => 'sometimes|string',
            'featured_image' => 'sometimes|string',
            'status' => 'sometimes|string',
            'published_at' => 'sometimes|date',
            'category_id' => 'sometimes|exists:categories,id',
            'tags' => 'sometimes|array',
            'tags.*' => 'exists:tags,id',
        ]);
        try {
            // update the post with new data
            $post->update($validated);

            //sync tags if provided

            if ($request->has('tags')) {
                $post->tags()->sync($request->tags);
            }

            // return json response
            return response()->json([
                'success' => true,
                'message' => 'Updated',
                'data' => $post->load(['user', 'category', 'tags']),
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update post',
                'error' => $e->getMessage(),
            ], 500);
        }


        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
