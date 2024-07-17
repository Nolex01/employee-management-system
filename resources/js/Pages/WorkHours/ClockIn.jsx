import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ClockInForm from './Partials/ClockInForm';

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Clock In"/>

            <div className="py-6 px-4">
                <div>
                    <div className="p-4">
                        <ClockInForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
