import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateDepartmentForm from './Partials/CreateDepartmentForm';

export default function Create({ auth })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create department</h2>}
        >
            <Head title="Create Department"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <CreateDepartmentForm></CreateDepartmentForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}