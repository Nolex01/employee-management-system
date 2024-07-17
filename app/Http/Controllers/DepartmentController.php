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

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $department = Department::create($validatedData);

        $departments = Department::all();
        
        return Inertia::render('Admin/Departments/List', [
            'departments' => $departments,
        ]);
    }

    public function deleteForm(Department $department)
    {
        return Inertia::render('Admin/Departments/Delete', [
            'department' => $department
        ]);
    }

    public function delete(Department $department)
    {
        $department->delete();
        return to_route('departments.list');
    }
}
