<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\LeaveController;
use App\Http\Controllers\WorkHourController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/myleaves', [LeaveController::class, 'listOwn'])->name('myleaves.list');
    Route::get('/leave/create', [LeaveController::class, 'create'])->name('leave.create');
    Route::post('/leave/store', [LeaveController::class, 'store'])->name('leave.store');

    Route::get('/myworkhours', [WorkHourController::class, 'listOwn'])->name('myworkhours.list');
    Route::post('/workhour/store', [WorkHourController::class, 'store'])->name('workhour.store');
    Route::get('/clockin', [WorkHourController::class, 'clockIn'])->name('clockin.create');
    Route::get('/clockout', [WorkHourController::class, 'clockOut'])->name('clockout.create');

    Route::post('/employee/update-avatar', [EmployeeController::class, 'updateAvatar'])->name('avatar.update');
});

Route::middleware('admin')->group(function () {
    Route::get('/statistics', [StatisticController::class, 'list'])->name('statistics.list');

    Route::get('/employees', [EmployeeController::class, 'list'])->name('employees.list');
    Route::get('/employee/create', [EmployeeController::class, 'create'])->name('employee.create');
    Route::post('/employee/store', [EmployeeController::class, 'store'])->name('employee.store');
    Route::get('/employee/form/delete/{employee}', [EmployeeController::class, 'deleteForm'])->name('employee.form.delete');
    Route::delete('/employee/delete/{employee}', [EmployeeController::class, 'delete'])->name('employee.delete');
    Route::get('/employee/form/edit/{employee}', [EmployeeController::class, 'editForm'])->name('employee.form.edit');
    Route::patch('/employee/edit/{employee}', [EmployeeController::class, 'edit'])->name('employee.edit');
    Route::get('/employees/export', [EmployeeController::class, 'export']);

    Route::get('/departments', [DepartmentController::class, 'list'])->name('departments.list');
    Route::get('/department/create', [DepartmentController::class, 'create'])->name('department.create');
    Route::post('/department/store', [DepartmentController::class, 'store'])->name('department.store');
    Route::get('/department/form/delete/{department}', [DepartmentController::class, 'deleteForm'])->name('department.form.delete');
    Route::delete('/department/delete/{department}', [DepartmentController::class, 'delete'])->name('department.delete');

    Route::get('/roles', [RoleController::class, 'list'])->name('roles.list');
    Route::get('/role/create', [RoleController::class, 'create'])->name('role.create');
    Route::post('/role/store', [RoleController::class, 'store'])->name('role.store');
    Route::get('/role/form/delete/{role}', [RoleController::class, 'deleteForm'])->name('role.form.delete');
    Route::delete('/role/delete/{role}', [RoleController::class, 'delete'])->name('role.delete');

    Route::get('/leaves', [LeaveController::class, 'list'])->name('leaves.list');
    Route::get('/leave/form/edit/{leave}', [LeaveController::class, 'editForm'])->name('leave.form.edit');
    Route::patch('/leave/edit/{leave}', [LeaveController::class, 'edit'])->name('leave.edit');

    Route::get('/workhours', [WorkHourController::class, 'list'])->name('workhours.list');
});

require __DIR__.'/auth.php';

