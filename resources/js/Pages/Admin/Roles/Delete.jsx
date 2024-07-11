import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteRoleForm from './Partials/DeleteRoleForm';

export default function Delete({ auth, role })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Role #{role.id}</h2>}
        >
            <Head title={"Role #" + role.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <DeleteRoleForm role={role}></DeleteRoleForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}