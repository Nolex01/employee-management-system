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

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone_number' => 'required|string|max:20|unique:users,phone_number',
            'password' => 'required|string|min:8',
            'role_id' => 'nullable|exists:roles,id',
            'department_id' => 'nullable|exists:departments,id',
            'salary' => 'required|numeric|min:0',
        ]);

        $employee = User::create($validatedData);

        $users = User::all();
        
        return Inertia::render('Admin/Employees/List', [
            'employees' => $users,
        ]);
    }

    public function editForm(User $employee)
    {

        $departments = Department::all();
        $roles = Role::all();

        return Inertia::render('Admin/Employees/Edit', [
            'employee' => $employee,
            'departments' => $departments,
            'roles' => $roles,
        ]);
    }

    public function edit(User $employee, Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|unique:users,email',
            'phone_number' => 'nullable|string|max:20|unique:users,phone_number',
            'role_id' => 'nullable|exists:roles,id',
            'department_id' => 'nullable|exists:departments,id',
            'salary' => 'nullable|numeric|min:0',
        ]);

        $employee->update($validatedData);
    }

    public function deleteForm(User $employee)
    {
        return Inertia::render('Admin/Employees/Delete', [
            'employee' => $employee
        ]);
    }

    public function delete(User $employee)
    {
        $employee->delete();
        return to_route('employees.list');
    }

}
