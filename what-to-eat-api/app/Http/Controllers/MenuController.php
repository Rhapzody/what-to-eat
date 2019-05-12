<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Menus;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Menus::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $menu = new Menus();
        $menu->name = $request->name;
        $menu->content = $request->content;
        $menu->user_id = $request->user_id; //ค่อยแก้เป็นคนที่ login
        $menu->save();
        $menu->tags()->attach(json_decode($request->tags));
        return $menu;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Menus::with(['tags', 'user'])->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $result = Menus::where('id', $id)
                    ->update($request->all());
        if ($result) {
            return response()->json([
                'success'=>true,
                'message'=>'Menu id:'. $id . ' updated'
            ],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = Menus::destroy($id);
        if ($result) {
            return response()->json([
                'success'=>true,
                'message'=>'Menu id:'. $id . ' deleted'
            ],200);
        }
    }
}
