<?php

namespace App\Http\Controllers;

use App\Models\User;  // Use the User model for searching lecturers
use Illuminate\Http\Request;
use Inertia\Inertia;

class LecturerController extends Controller
{
    /**
     * Display a listing of the lecturers.
     */
    public function index()
    {
        // Fetch all users where the level is 'lecturer'
        $users = User::all();
        // $lecturer = User::where('level', 'lecturer')->get(['id', 'name', 'email']);
        $lecturers = [
            ['id' => 2, 'name' => 'Jane Smith', 'email' => 'jane.smith@example.com','level'=>'lecturer'],
            ['id' => 3, 'name' => 'Mary Johnson', 'email' => 'mary.johnson@example.com','level'=>'lecturer'],
            ['id' => 4, 'name' => 'James Wilson', 'email' => 'james.wilson@example.com','level'=>'lecturer'],
            ['id' => 5, 'name' => 'Patricia Taylor', 'email' => 'patricia.taylor@example.com','level'=>'lecturer'],
        ];
        // Use Inertia to render the Lecturer/Index page and pass the lecturers data
        return Inertia::render('Lecturer/Index', [
            'users'=>$users,
            'lecturers' => $lecturers // Passing the list of lecturers to the frontend
        ]);
    }

    public function addLecturer(Request $request, $id)
    {
        // Find the user by id
        $user = User::findOrFail($id);

        // Update the user's level to 'lecturer'
        $user->level = 'lecturer';
        $user->save();

        return response()->json(['message' => 'User is now a lecturer!', 'user' => $user]);
    }

    /**
     * Display the specified lecturer.
     */
    public function show($id)
    {
        // Find the lecturer by id
        $lecturer = User::findOrFail($id);

        // Use Inertia to render the Lecturer/Show page and pass the lecturer data
        return Inertia::render('Lecturer/Show', [
            'lecturer' => $lecturer // Passing the lecturer data to the frontend
        ]);
    }

    /**
     * Search for a lecturer by email from the users table.
     */
    public function searchByEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        // Search for the user with the given email
        $lecturer = User::where('email', $request->email)->first();

        if ($lecturer) {
            return response()->json([
                'name' => $lecturer->name,
                'email' => $lecturer->email,
                'bio' => $lecturer->bio ?? 'No bio available', // Assuming 'bio' is stored in the users table
            ]);
        }

        return response()->json(['message' => 'Lecturer not found'], 404); // Return 404 if lecturer not found
    }
}
