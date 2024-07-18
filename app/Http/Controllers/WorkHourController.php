<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\WorkHour;
use App\Models\User;

class WorkHourController extends Controller
{
    public function list()
    {
        $workhours = WorkHour::all();
        $users = User::all();

        return Inertia::render('Admin/WorkHours/List', [
            'workhours' => $workhours,
            'users' => $users, 
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
    
        $lastWorkhour = WorkHour::where('user_id', $validatedData['user_id'])
                                ->orderBy('created_at', 'desc')
                                ->first();
    

        if($validatedData['check_in']){
            if ($lastWorkhour && is_null($lastWorkhour->check_out)) {
                return redirect()->back()->withErrors(['check_in' => 'You cannot create a new record until the previous record is closed.'])->withInput();
            } else {
                $workhour = WorkHour::create($validatedData);
            }
        }

        if($validatedData['check_out']){
            if ($lastWorkhour && (is_null($lastWorkhour->check_in) || isset($lastWorkhour->check_out))) {
                return redirect()->back()->withErrors(['check_out' => 'You cannot create a new record until the previous record is closed.'])->withInput();
            } else {

                $lastWorkhour->update(['check_out' => $validatedData['check_out']]);
            }
        }
        
        $userWorkHours = WorkHour::where('user_id', $validatedData['user_id'])->get();
    
        return Inertia::render('WorkHours/List', [
            'workhours' => $userWorkHours,
        ]);
    }
    
}
