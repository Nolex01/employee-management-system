<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DepartmentController;
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

    Route::get('/departments', [DepartmentController::class, 'list'])->name('departments.list');
    Route::post('/department/store', [DepartmentController::class, 'store'])->name('department.store');
    Route::get('/department/form/delete/{department}', [DepartmentController::class, 'deleteForm'])->name('department.form.delete');
    Route::delete('/department/delete/{department}', [DepartmentController::class, 'delete'])->name('department.delete');
});

require __DIR__.'/auth.php';

