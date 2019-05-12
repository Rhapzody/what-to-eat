<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menus extends Model
{
    protected $table = 'menus';
    protected $guarded = ['id'];
    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }

    public function tags(){
        return $this->belongsToMany('App\Tags', 'menu_tags', 'menu_id', 'tag_id');
    }

    public function menuTags(){
        return $this->hasMany('App\MenuTag', 'menu_id');
    }
}
