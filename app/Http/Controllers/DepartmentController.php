<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Department;

class DepartmentController extends Controller
{
    public function list()
    {
        $departments = Department::all();

        return Inertia::render('Admin/Departments/List', [
            'departments' => $departments,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Departments/Create');
    }
}
