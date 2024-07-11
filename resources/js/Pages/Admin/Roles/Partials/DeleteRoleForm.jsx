import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

const DeleteRoleForm = ({ role }) => {

    const { data, setData, delete: destroy, processing } = useForm({
        name: role.name,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        destroy(route('role.delete', role.id));
    };

    return (
        <section className="max-w-xL">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Role informations</h2>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="id" value="ID" />

                    <TextInput
                        id="id"
                        className="mt-1 block w-full"
                        value={role.id}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={role.name}
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

export default DeleteRoleForm;