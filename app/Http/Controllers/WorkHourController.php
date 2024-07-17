<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\WorkHour;

class WorkHourController extends Controller
{
    public function list()
    {
        $workhours = WorkHour::all();

        return Inertia::render('Admin/WorkHours/List', [
            'workhours' => $workhours,
        ]);
    }

    public function listOwn()
    {
        $user = auth()->user();
        $workhours = WorkHour::where('user_id', $user->id)->get();
    
        return Inertia::render('WorkHours/List', [
            'workhours' => $workhours,
        ]);
    }
    

    public function clockIn()
    {
        return Inertia::render('WorkHours/ClockIn');
    }

    public function clockOut()
    {
        return Inertia::render('WorkHours/ClockOut');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'check_in' => 'nullable|date',
            'check_out' => 'nullable|date',
        ]);
    
        $validatedData['user_id'] = auth()->id();
    
        $existingWorkhour = WorkHour::where('user_id', $validatedData['user_id'])
                                    ->whereDate('created_at', now()->toDateString())
                                    ->first();
    
        if ($existingWorkhour) {
            return redirect()->back()->with('error', 'You have already checked in or out for today.');
        }
    
        $workhour = WorkHour::create($validatedData);
    
        $userWorkHours = WorkHour::where('user_id', $validatedData['user_id'])->get();
    
        return Inertia::render('WorkHours/List', [
            'workhours' => $userWorkHours,
        ]);
    }
    
}
