import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteRoleForm from './Partials/DeleteRoleForm';

export default function Delete({ auth, role })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title={"Role #" + role.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <DeleteRoleForm role={role}></DeleteRoleForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}