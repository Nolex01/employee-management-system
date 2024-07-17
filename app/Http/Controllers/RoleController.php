<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Role;

class RoleController extends Controller
{
    public function list()
    {
        $roles = Role::all();

        return Inertia::render('Admin/Roles/List', [
            'roles' => $roles,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Roles/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $role = Role::create($validatedData);

        $roles = Role::all();
        
        return Inertia::render('Admin/Roles/List', [
            'roles' => $roles,
        ]);
    }

    public function deleteForm(Role $role)
    {
        return Inertia::render('Admin/Roles/Delete', [
            'role' => $role
        ]);
    }

    public function delete(Role $role)
    {
        $role->delete();
        return to_route('roles.list');
    }
}
