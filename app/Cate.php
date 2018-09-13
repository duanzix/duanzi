<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cate extends Model
{
    use SoftDeletes;
    protected $table = 'cates';
	protected $dates = ['deleted_at'];
}
