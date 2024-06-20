<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class EmployeeController extends Controller
{
    public function list()
    {
        $users = User::all();

        return Inertia::render('Admin/Employees/List', [
            'employees' => $users,
        ]);
    }
}
