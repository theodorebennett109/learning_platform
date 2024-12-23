<?php
namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // For now, return dummy data as an array
        $courses = [
            ['id' => 1, 'title' => 'Course 1', 'description' => 'Description of Course 1', 'price' => 100],
            ['id' => 2, 'title' => 'Course 2', 'description' => 'Description of Course 2', 'price' => 200],
            ['id' => 3, 'title' => 'Course 3', 'description' => 'Description of Course 3', 'price' => 150],
            ['id' => 4, 'title' => 'Course 4', 'description' => 'Description of Course 4', 'price' => 120],
            ['id' => 5, 'title' => 'Course 5', 'description' => 'Description of Course 5', 'price' => 180],
            ['id' => 6, 'title' => 'Course 6', 'description' => 'Description of Course 6', 'price' => 250],
        ];

        return Inertia::render('Course/Index', [
            'courses' => $courses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Course/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming data
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
        ]);

        // Create the course in the database
        Course::create($validated);

        // Redirect back to the course index
        return redirect()->route('courses.index');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        // For now, use a static course as an example (mock data)
        $course1 = [
            'id' => 1,
            'title' => 'Course 1',
            'description' => 'Description of Course 1',
            'price' => 100,
        ];

        // Return the course data to the Show component
        return Inertia::render('Course/Show', [
            'course' => $course1 // passing the mock course data to the front-end
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        return Inertia::render('Course/Edit', [
            'course' => $course
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        // Validate and update the course
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $course->update($validated);

        return redirect()->route('courses.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return redirect()->route('courses.index');
    }
}
