<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Duanzi extends Model
{
    use SoftDeletes;
    protected $table = 'duanzis';
	protected $dates = ['deleted_at'];
	public function cate()
	{
		return $this->belongsTo('App\Cate','cate_id','id');
	}
}
