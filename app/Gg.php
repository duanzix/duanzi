<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gg extends Model
{
    use SoftDeletes;
    protected $table = 'ggs';
	protected $dates = ['deleted_at'];
}
