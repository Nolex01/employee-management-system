import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

const CreateEmployeeForm = ({ departments, roles }) => {
    const { data, setData, post, processing } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('employee.store'), {
            preserveScroll: true,
            ...data
        });
    };

    return (
        <section className="max-w-xl">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Add Employee</h2>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name || ''}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email || ''}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="phone_number" value="Phone Number" />
                    <TextInput
                        id="phone_number"
                        className="mt-1 block w-full"
                        value={data.phone_number || ''}
                        onChange={(e) => setData('phone_number', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        className="mt-1 block w-full"
                        value={data.password || ''}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="role_id" value="Role" />
                    <select
                        id="role_id"
                        className="mt-1 block w-full"
                        value={data.role_id || ''}
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
                        value={data.department_id || ''}
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
                        type="number"
                        step="0.01"
                        className="mt-1 block w-full"
                        value={data.salary || ''}
                        onChange={(e) => setData('salary', e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Create Employee</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default CreateEmployeeForm;
