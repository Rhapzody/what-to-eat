<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    protected $table = 'tags';
    public $timestamps = false;
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    public function type(){
        return $this->belongsTo('App\TagTyps', 'tag_type_id', 'id');
    }

    public function menuTags(){
        return $this->hasMany('App\MenuTag', 'tag_id', 'id');
    }

    public function menus(){
        return $this->belongsToMany('App\Menus', 'menu_tags', 'tag_id', 'menu_id');
    }
}
