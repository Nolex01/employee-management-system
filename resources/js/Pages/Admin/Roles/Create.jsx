import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateRoleForm from './Partials/CreateRoleForm';

export default function Create({ auth })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create Role"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <CreateRoleForm></CreateRoleForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}