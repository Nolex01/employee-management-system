<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Role;
use App\Models\Department;
use App\Models\Leave;
use App\Models\WorkHour;

class StatisticController extends Controller
{
    public function list()
    {
        $users = User::all();
        $roles = Role::all();
        $departments = Department::all();
        $leaves = Leave::all();
        $workhours = WorkHour::all();

        return Inertia::render('Admin/Statistics', [
            'users' => $users,
            'roles' => $roles,
            'departments' => $departments,
            'leaves' => $leaves,
            'workhours' => $workhours,
        ]);
    }
}
