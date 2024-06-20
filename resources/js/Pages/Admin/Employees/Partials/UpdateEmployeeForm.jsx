import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';

const UpdateEmployeeForm = ({ employee, departments = [], roles = [] }) => {

    const { data, setData, patch, processing, recentlySuccessful } = useForm({
        name: employee.name,
        department_id: employee.department_id || '',
        role_id: employee.role_id || '',
        salary: employee.salary,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route('employee.edit', employee.id), {
            preserveScroll: true
        });
    };

    return (
        <section className="max-w-xl">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Edit employee</h2>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="role_id" value="Role" />
                    <select
                        id="role_id"
                        className="mt-1 block w-full"
                        value={data.role_id}
                        onChange={(e) => setData('role_id', e.target.value)}
                    >
                        <option value="">Select Role</option>
                        {roles.map(role => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <InputLabel htmlFor="department_id" value="Department" />
                    <select
                        id="department_id"
                        className="mt-1 block w-full"
                        value={data.department_id}
                        onChange={(e) => setData('department_id', e.target.value)}
                    >
                        <option value="">Select Department</option>
                        {departments.map(department => (
                            <option key={department.id} value={department.id}>
                                {department.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <InputLabel htmlFor="salary" value="Salary" />

                    <TextInput
                        id="salary"
                        className="mt-1 block w-full"
                        value={data.salary}
                        onChange={(e) => setData('salary', e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
            
        </section>
    );
};

export default UpdateEmployeeForm;
