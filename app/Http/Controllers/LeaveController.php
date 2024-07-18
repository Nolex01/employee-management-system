<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Leave;
use App\Models\User;

class LeaveController extends Controller
{
    public function list()
    {
        $leaves = Leave::all();
        $users = User::all();

        return Inertia::render('Admin/Leaves/List', [
            'leaves' => $leaves,
            'users' => $users, 
        ]);
    }

    public function listOwn()
    {
        $user = auth()->user();
        $leaves = Leave::where('user_id', $user->id)->get();
    
        return Inertia::render('Leaves/List', [
            'leaves' => $leaves,
        ]);
    }
    

    public function create()
    {
        return Inertia::render('Leaves/Create');
    }

    public function store(Request $request)
    {
        $today = Carbon::today()->format('Y-m-d');
    
        $validatedData = $request->validate([
            'start_date' => ['required', 'date', 'after_or_equal:' . $today],
            'end_date' => ['required', 'date', 'after_or_equal:start_date'],
            'reason' => 'required|string|max:50',
        ]);
    
        $validatedData['user_id'] = auth()->id();
        $validatedData['status'] = "Pending";
        $leave = Leave::create($validatedData);
    
        $userId = $validatedData['user_id'];
        $userLeaves = Leave::where('user_id', $userId)->get();
    
        return Inertia::render('Leaves/List', [
            'leaves' => $userLeaves,
        ]);
    }

    public function editForm(Leave $leave)
    {
        return Inertia::render('Admin/Leaves/Edit', [
            'leave' => $leave,
        ]);
    }

    public function edit(Leave $leave, Request $request)
    {
        $validatedData = $request->validate([
            'status' => 'nullable|string|max:255',
        ]);

        $leave->update($validatedData);
    }

}
