<?php

namespace App\Http\Controllers;

use App\Models\Jenis_sampah;
use Illuminate\Http\Request;

class JenisSampahController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.jenis-sampah');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Jenis_sampah $jenis_sampah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Jenis_sampah $jenis_sampah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Jenis_sampah $jenis_sampah)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Jenis_sampah $jenis_sampah)
    {
        //
    }
}
