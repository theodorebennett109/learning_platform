<?php
namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch all courses from the database
        $courses=Course::all();
        $lecturers=User::where('level','lecturer')->get();

        return Inertia::render('Course/Index', [
            'courses' => $courses,'lecturers' => $lecturers
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
            'lecturer_id' => 'required|numeric',
            'price' => 'required|numeric',
        ]);

        // Create the course in the database
        $course = Course::create($validated);

        // Redirect back to the course index
        return redirect()->route('courses.show', $course);
    }

    /**
     * Display the specified resource.
     */
    // public function show($course)
    // {

    //     // Fetch the course from the database using the provided course ID
    //     $course = Course::findOrFail($course); // Ensure we are fetching the course first


    //     // dd($course);
    //     // Fetch the lecturer using the lecturer_id from the course
    //     $courseLecturer = User::where('id', $course->lecturer_id)->first(['id', 'name']);  // Use first() to get a single lecturer

    //     // dd($courseLecturer);
    //     // Attach the lecturer information to the course object
    //     $course->lecturer = $courseLecturer;

    //     // dd($course);
    //     // Return the course data to the Show component
    //     return Inertia::render('Course/Show', [
    //         'course' => $course
    //          // passing the course data with lecturer info to the front-end
    //     ]);
    // }

    public function show($course)
    {
        // Fetch the course along with the materials and lecturer using eager loading
        $course = Course::with('materials') // Eagerly load materials
                        ->findOrFail($course); // Ensure we are fetching the course first

        // Fetch the lecturer using the lecturer_id from the course
        $courseLecturer = User::where('id', $course->lecturer_id)->first(['id', 'name']); // Get the lecturer details

        // Attach the lecturer information to the course object
        $course->lecturer = $courseLecturer;

        // Return the course data along with materials and lecturer info to the front-end
        return Inertia::render('Course/Show', [
            'course' => $course,

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
