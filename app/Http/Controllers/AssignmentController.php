<?php
// app/Http/Controllers/AssignmentController.php
namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Course;
use Illuminate\Http\Request;

class AssignmentController extends Controller
{
    /**
     * Store a newly created assignment in storage.
     */
    public function store(Request $request, $courseId)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date',
        ]);

        $course = Course::findOrFail($courseId);

        $assignment = new Assignment([
            'course_id' => $course->id,
            'title' => $request->title,
            'description' => $request->description,
            'due_date' => $request->due_date,
        ]);

        $assignment->save();

        return response()->json(['message' => 'Assignment added successfully!', 'assignment' => $assignment]);
    }

    /**
     * Display all assignments for a specific course.
     */
    public function index($courseId)
    {
        $assignments = Assignment::where('course_id', $courseId)->get();
        return response()->json($assignments);
    }

    /**
     * Show the specified assignment.
     */
    public function show($id)
    {
        $assignment = Assignment::findOrFail($id);
        return response()->json($assignment);
    }

    /**
     * Update the specified assignment.
     */
    public function update(Request $request, $id)
    {
        $assignment = Assignment::findOrFail($id);
        $assignment->update($request->all());

        return response()->json(['message' => 'Assignment updated successfully!', 'assignment' => $assignment]);
    }

    /**
     * Remove the specified assignment from storage.
     */
    public function destroy($id)
    {
        $assignment = Assignment::findOrFail($id);
        $assignment->delete();

        return response()->json(['message' => 'Assignment deleted successfully!']);
    }
}
