import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

const CreateEmployeeForm = ({ departments, roles }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone_number: '',
        password: '',
        role_id: '',
        department_id: '',
        salary: '',
        avatar: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            ...data,
            avatar: data.avatar instanceof File ? data.avatar : undefined,
        };

        post(route('employee.store'), formData, {
            preserveScroll: true,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleAvatarChange = (e) => {
        setData('avatar', e.target.files[0]);
    };

    return (
        <section className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <header className="bg-gray-200 py-4 px-6">
                <h2 className="text-lg font-medium text-gray-900">Add Employee</h2>
            </header>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="phone_number" value="Phone Number" />
                    <TextInput
                        id="phone_number"
                        name="phone_number"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.phone_number}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.password}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="role_id" value="Role" />
                    <select
                        id="role_id"
                        name="role_id"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.role_id}
                        onChange={handleInputChange}
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
                        name="department_id"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.department_id}
                        onChange={handleInputChange}
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
                        name="salary"
                        type="number"
                        step="1"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.salary}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="avatar" value="Avatar" />
                    <input
                        id="avatar"
                        name="avatar"
                        type="file"
                        accept="image/png, image/jpeg"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        onChange={handleAvatarChange}
                    />
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700">
                        <p className="font-bold">Please fix the following errors:</p>
                        <ul className="list-disc list-inside">
                            {Object.keys(errors).map((key) => (
                                <li key={key}>{errors[key]}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex justify-end">
                    <PrimaryButton disabled={processing}>
                        {processing ? 'Creating...' : 'Create Employee'}
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default CreateEmployeeForm;
