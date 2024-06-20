<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class CreateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:admin 
                            {name : The name of the admin} 
                            {email : The email of the admin} 
                            {phone_number : The phone number of the admin} 
                            {password : The password for the admin} 
                            {--role_id= : The role ID for the admin} 
                            {--department_id= : The department ID for the admin} 
                            {--salary=0 : The salary of the admin}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new admin account';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');
        $email = $this->argument('email');
        $phone_number = $this->argument('phone_number');
        $password = $this->argument('password');
        $role_id = $this->option('role_id') ?? null;
        $department_id = $this->option('department_id') ?? null;
        $salary = $this->option('salary') ?? 0;

        if (User::where('email', $email)->exists()) {
            $this->error('The email is already in use.');
            return 1;
        }

        if (User::where('phone_number', $phone_number)->exists()) {
            $this->error('The phone number is already in use.');
            return 1;
        }

        $admin = User::create([
            'name' => $name,
            'email' => $email,
            'phone_number' => $phone_number,
            'password' => Hash::make($password),
            'role_id' => $role_id,
            'department_id' => $department_id,
            'is_admin' => true,
            'salary' => $salary,
        ]);

        $this->info('Admin account created successfully.');

        return 0;
    }
}
