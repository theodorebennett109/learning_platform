<?php

use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

use App\Http\Controllers\CourseController;
use App\Http\Controllers\LecturerController;
use App\Http\Controllers\MaterialController;

Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');
Route::get('/courses/create', [CourseController::class, 'create'])->name('courses.create');
Route::post('/courses', [CourseController::class, 'store'])->name('courses.store');
Route::get('/courses/{course}', [CourseController::class, 'show'])->name('courses.show');
Route::get('/courses/{course}/edit', [CourseController::class, 'edit'])->name('courses.edit');
Route::put('/courses/{course}', [CourseController::class, 'update'])->name('courses.update');
Route::delete('/courses/{course}', [CourseController::class, 'destroy'])->name('courses.destroy');


Route::get('/lecturers', [LecturerController::class, 'index']);  // Lecturer Index
Route::get('/lecturers/{id}', [LecturerController::class, 'show']);  // Lecturer Show
Route::post('/lecturers/{id}/add', [LecturerController::class, 'addLecturer']); // Route for adding lecturer



Route::prefix('courses/{courseId}/materials')->group(function () {
    Route::post('/', [MaterialController::class, 'store']);   // Add material to course
    Route::get('/', [MaterialController::class, 'index']);    // Get all materials for course
    Route::delete('{materialId}', [MaterialController::class, 'destroy']);  // Delete material
});



Route::prefix('courses/{courseId}/assignments')->group(function () {
    Route::post('/', [AssignmentController::class, 'store']);   // Add assignment to course
    Route::get('/', [AssignmentController::class, 'index']);    // Get all assignments for course
    Route::get('{id}', [AssignmentController::class, 'show']);    // Get single assignment
    Route::put('{id}', [AssignmentController::class, 'update']);  // Update assignment
    Route::delete('{id}', [AssignmentController::class, 'destroy']);  // Delete assignment
});
require __DIR__.'/auth.php';
