import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateEmployeeForm from './Partials/UpdateEmployeeForm';

export default function Edit({ auth, employee })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employee #{employee.id}</h2>}
        >
            <Head title={"Employee #" + employee.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <UpdateEmployeeForm employee={employee}></UpdateEmployeeForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}