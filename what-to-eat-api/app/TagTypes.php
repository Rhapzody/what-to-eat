<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TagTypes extends Model
{
    protected $table = 'tag_types';
    public $timestamps = false;
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    public function tags(){
        return $this->hasMany('App\Tags', 'tag_type_id', 'id'); // 'id' ไม่ต้องเขียนก็ได้ยุนะ
    }
}
