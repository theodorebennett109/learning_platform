<?php

// app/Http/Controllers/MaterialController.php
namespace App\Http\Controllers;

use App\Models\Material;
use App\Models\Course;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function store(Request $request, $courseId)
    {
        $request->validate([
            'type' => 'required|string',
            'title' => 'required|string',
            'url' => 'required|string',
        ]);

        $course = Course::findOrFail($courseId);

        $material = new Material([
            'course_id' => $course->id,
            'type' => $request->type,
            'title' => $request->title,
            'url' => $request->url,
        ]);

        $material->save();

        return response()->json(['message' => 'Material added successfully!', 'material' => $material]);
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
