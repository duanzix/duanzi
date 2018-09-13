<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Duanzi extends Model
{
    use SoftDeletes;
    protected $table = 'duanzis';
	protected $dates = ['deleted_at'];

	public function comments()
	{
  		return $this->hasMany('App\Comment');
	}
}
