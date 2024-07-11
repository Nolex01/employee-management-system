import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

const DeleteDepartmentForm = ({ department }) => {

    const { data, setData, delete: destroy, processing } = useForm({
        name: department.name,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        destroy(route('department.delete', department.id));
    };

    return (
        <section className="max-w-xL">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Department informations</h2>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="id" value="ID" />

                    <TextInput
                        id="id"
                        className="mt-1 block w-full"
                        value={department.id}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={department.name}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="description" value="Description" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={department.description}
                        disabled
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Delete</PrimaryButton>
                </div>
            </form>
            
        </section>
    );
};

export default DeleteDepartmentForm;