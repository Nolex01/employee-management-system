import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ClockOutForm from './Partials/ClockOutForm';

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Clock Out"/>

            <div className="py-6 px-4">
                <div>
                    <div className="p-4">
                        <ClockOutForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
