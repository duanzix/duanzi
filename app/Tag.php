<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use SoftDeletes;
    protected $table = 'tags';
	protected $dates = ['deleted_at'];

	public function duanzis()
	{
		return $this->belongsToMany('App\Duanzi','duanzi_tag','tag_id','duanzi_id');
	}
}
