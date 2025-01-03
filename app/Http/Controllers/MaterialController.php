<?php

// app/Http/Controllers/MaterialController.php
namespace App\Http\Controllers;

use App\Models\Material;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaterialController extends Controller
{
    public function store(Request $request, $courseId)
    {
        try {
            // Validate the incoming request
            $request->validate([
                'title' => 'required|string',
                'file' => 'required|file|mimes:pdf,docx,xlsx,txt,png,jpg,jpeg|max:2048',
            ]);

            // Fetch the course
            $course = Course::findOrFail($courseId);

            // Store the file in the 'public/materials'
            $filePath = $request->file('file')->store('materials', 'public');

            // Determine file type
            $fileType = $request->file('file')->getClientOriginalExtension();

            // Save the material
            $material = new Material([
                'course_id' => $course->id,
                'title' => $request->title,
                'url' => $filePath,
                'type' => $fileType,
            ]);
            $material->save();

            // Eager load the materials relationship
            $course->load('materials','lecturers');

            // Return a success message with the course data
            return Inertia::render('Course/Show', [
                'course' => $course,
                'success' => 'Material added successfully!',
            ]);
        } catch (\Exception $e) {
            // Return an error message in case of failure
            return Inertia::render('Course/Show', [
                'course' => $course,
                'error' => 'Failed to add material: ' . $e->getMessage(),
            ]);
        }
    }




    public function index($courseId)
    {
        $materials = Material::where('course_id', $courseId)->get();

        return response()->json($materials);
    }

    public function destroy($materialId)
    {
        $material = Material::findOrFail($materialId);
        $material->delete();

        return response()->json(['message' => 'Material deleted successfully!']);
    }




}
