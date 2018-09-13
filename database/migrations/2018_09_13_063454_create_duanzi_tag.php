<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDuanziTag extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('duanzi_tag', function (Blueprint $table) {
            $table->integer('tag_id')->nullable()->comment('标签ID');
            $table->integer('duanzi_id')->nullable()->comment('段子ID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('duanzi_tag');
    }
}
