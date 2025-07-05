<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
    // login controller
    public function login(Request $request){
        $request->validate([
            'login'=>'required|string',
            'password'=>'required|string|min:8',
        ]);

        // finding a user through email or username

        $user = User::where('email' , $request->login)
        ->orWhere('name', $request->login)
        ->first();
        
        // check credentials
        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                 'message' => 'Invalid credentials'
            ],401);
           
        }

        //create token
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);

    }

    // logout controller
    public function logout(Request $request){
       $user = $request->user();
       
        if (!$user) {
            return response()->json([
                'message' => 'No authenticated user'
            ], 401);
        }

       $user->tokens()->delete();

       return response()->json([
      'message'=>'logged out',
      'data' => [
                'tokens_revoked' => true
            ]
        ]);
   
    }

    public function register(Request $request)
    {
        $requestUserData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|min:8'
        ]);

        // create user
        $user = User::create([
            'name' => $requestUserData['name'],
            'email' => $requestUserData['email'],
            'password' => Hash::make($requestUserData['password']),
        ]);

        // json response

        return response()->json([
            'message' => 'user created successfully',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at,
            ]
        ], 201);
    }
    //owner only get all users
    public function index(){
        return response()->json([
            'users' => User::query()
            ->where('id','!=' ,auth())
            ->get([
                'id',
                'name',
                'email',
                'created_at'
                ])
            ]);
    }

    // delete auth controller(owner only)
    public function deleteUser(User $user){
        // preventing to delete own account
        if($user-> id === auth()){
            return response()->json([
                'message' => 'cannot delete own account'
            ],403);
        }

        if($user->id === 1){
            return response()->json([
                   'message' => 'Primary owner account cannot be deleted'
            ],403);
        }

        $user->delete();

        return response()->json([
            'message' => 'User deletes successfully'
        ]);

    }
    
};
