import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateLeaveForm from './Partials/UpdateLeaveForm';

export default function Edit({ auth, leave })
{
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title={"Leave #" + leave.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <UpdateLeaveForm leave={leave}></UpdateLeaveForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}