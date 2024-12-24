<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseSubscriptionTable extends Migration


{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_subscriptions', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->foreignId('course_id')->constrained('courses')->onDelete('cascade'); // Foreign key for course
            $table->foreignId('student_id');
            $table->boolean('subscribed')->default(0); // Subscription status (0 or 1)
            $table->timestamp('subscription_date')->nullable(); // Date when the student subscribed
            $table->timestamps(); // Created and updated timestamps
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_subscriptions');
    }
}
