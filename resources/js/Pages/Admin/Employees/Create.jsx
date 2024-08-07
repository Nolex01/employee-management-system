import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateEmployeeForm from './Partials/CreateEmployeeForm';

export default function Create({ auth, departments, roles })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create Employee"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <CreateEmployeeForm departments={departments} roles={roles}></CreateEmployeeForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}