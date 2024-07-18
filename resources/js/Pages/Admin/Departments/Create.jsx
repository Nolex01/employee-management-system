import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateDepartmentForm from './Partials/CreateDepartmentForm';

export default function Create({ auth })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
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