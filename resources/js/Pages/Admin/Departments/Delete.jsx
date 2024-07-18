import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteDepartmentForm from './Partials/DeleteDepartmentForm';

export default function Delete({ auth, department })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title={"Department #" + department.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <DeleteDepartmentForm department={department}></DeleteDepartmentForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}