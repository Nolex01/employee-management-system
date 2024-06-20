<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Department;
use App\Models\Role;

class EmployeeController extends Controller
{
    public function list()
    {
        $users = User::all();

        return Inertia::render('Admin/Employees/List', [
            'employees' => $users,
        ]);
    }

    public function create()
    {

        $departments = Department::all();
        $roles = Role::all();
        
        return Inertia::render('Admin/Employees/Create', [
            'departments' => $departments,
            'roles' => $roles,
        ]);
    }
}
