<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuTag extends Model
{
    public $incrementing = false;
    protected $primaryKey = ['tag_id', 'menu_id'];
    protected $table = 'menu_tags';
    public $timestamps = false;
    protected $guarded = ['tag_id', 'menu_id'];

    public function menu(){
        return $this->belongsTo('App\Menus', 'menu_id');
    }

    public function tag(){
        return $this->belongsTo('App\Tags', 'tag_id');
    }
}
