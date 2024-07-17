import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateLeaveForm from './Partials/CreateLeaveForm';

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create Leave Request"/>

            <div className="py-6 px-4">
                <div>
                    <div className="p-4">
                        <CreateLeaveForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
