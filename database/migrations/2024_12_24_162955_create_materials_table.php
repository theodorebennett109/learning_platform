<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
// database/migrations/{timestamp}_create_materials_table.php
public function up()
{
    Schema::create('materials', function (Blueprint $table) {
        $table->id();
        $table->foreignId('course_id')->constrained()->onDelete('cascade'); // Reference to courses table
        $table->string('type');  // e.g., pdf, spreadsheet, link
        $table->string('title');
        $table->string('url');  // For file links or URLs
        $table->timestamps();
    });
}

public function down()
{
    Schema::dropIfExists('materials');
}

};
