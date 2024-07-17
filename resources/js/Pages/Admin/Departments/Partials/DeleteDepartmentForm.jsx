import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

const DeleteDepartmentForm = ({ department }) => {
    const { destroy, processing } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route('department.delete', department.id), {
            preserveScroll: true,
        });
    };

    return (
        <section className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <header className="bg-gray-200 py-4 px-6">
                <h2 className="text-lg font-medium text-gray-900">Department Information</h2>
            </header>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                    <InputLabel htmlFor="id" value="ID" />
                    <TextInput
                        id="id"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={department.id}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={department.name}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="description" value="Description" />
                    <TextInput
                        id="description"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={department.description}
                        disabled
                    />
                </div>

                <div className="flex justify-end">
                    <PrimaryButton disabled={processing}>Delete</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default DeleteDepartmentForm;
