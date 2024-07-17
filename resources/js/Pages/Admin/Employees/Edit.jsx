import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateEmployeeForm from './Partials/UpdateEmployeeForm';

export default function Edit({ auth, employee })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title={"Employee #" + employee.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <UpdateEmployeeForm employee={employee}></UpdateEmployeeForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}