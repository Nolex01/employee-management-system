import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

const DeleteEmployeeForm = ({ employee }) => {
    const { data, setData, delete: destroy, processing } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route('employee.delete', employee.id));
    };

    return (
        <section className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <header className="bg-gray-200 py-4 px-6">
                <h2 className="text-lg font-medium text-gray-900">Delete Employee</h2>
            </header>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                    <InputLabel htmlFor="id" value="ID" />
                    <TextInput
                        id="id"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                        value={employee.id}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                        value={employee.name}
                        disabled
                    />
                </div>

                <div className="flex justify-end">
                    <PrimaryButton disabled={processing} className="bg-red-500 hover:bg-red-600">
                        {processing ? 'Deleting...' : 'Delete Employee'}
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default DeleteEmployeeForm;
