<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDuanzisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('duanzis', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->comment('段子标题');
            $table->text('content')->comment('段子内容');
            $table->string('views')->default(0)->comment('浏览量');
            $table->string('zans')->default(0)->comment('点赞数');
            $table ->softDeletes();
            $table->integer('cate_id')->nullable()->comment('分类ID');
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
        Schema::dropIfExists('duanzis');
    }
}
