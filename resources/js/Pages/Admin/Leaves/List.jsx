import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

export default function List({ auth, leaves }) {

    const formatOrderTime = (timeString) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        return new Date(timeString).toLocaleString('en-US', options);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Leaves</h2>}
        >
            <Head title="Leaves" />

            <div className="py-6 px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Leaves</h3>
                        {leaves.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>User</th>
                                            <th>Start</th>
                                            <th>End</th>
                                            <th>Reason</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {leaves.map(leave => (
                                            <tr key={leave.id}>
                                                <td>{leave.id}</td>
                                                <td>{leave.user_id}</td>
                                                <td>{leave.start_date}</td>
                                                <td>{leave.end_date}</td>
                                                <td>{leave.reason}</td>
                                                <td>{leave.status}</td>
                                                <td>{formatOrderTime(leave.created_at)}</td>
                                                <td>{formatOrderTime(leave.updated_at)}</td>
                                                <td><a href={route('leave.form.edit', leave.id)} className="text-blue-600 hover:underline">Edit</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p>No leave found.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
