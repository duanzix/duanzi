<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Wm extends Model
{
    use SoftDeletes;
    protected $table = 'wms';
	protected $dates = ['deleted_at'];
}
