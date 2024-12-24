<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
// database/migrations/{timestamp}_create_assignments_table.php
public function up()
{
    Schema::create('assignments', function (Blueprint $table) {
        $table->id();
        $table->foreignId('course_id')->constrained()->onDelete('cascade'); // Reference to courses table
        $table->string('title');
        $table->text('description');
        $table->date('due_date');
        $table->string('status')->default('pending'); // default status is pending
        $table->timestamps();
    });
}

public function down()
{
    Schema::dropIfExists('assignments');
}

};
