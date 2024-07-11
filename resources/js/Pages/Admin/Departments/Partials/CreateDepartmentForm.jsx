import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

const CreateDepartmentForm = () => {
    const { data, setData, post, processing } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('department.store'), {
            preserveScroll: true,
            ...data
        });
    };

    return (
        <section className="max-w-xl">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Create Department</h2>
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
                    <InputLabel htmlFor="description" value="Description" />
                    <TextInput
                        id="description"
                        type="description"
                        className="mt-1 block w-full"
                        value={data.description || ''}
                        onChange={(e) => setData('description', e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Create Department</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default CreateDepartmentForm;
