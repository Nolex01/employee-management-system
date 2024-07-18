import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

const List = ({ auth, leaves, users }) => {

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

    const getUsername = (userId) => {
        const user = users.find(user => user.id === userId);
        return user ? user.name : 'Unkown!';
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Leaves" />

            <div className="py-6 px-4">
                <div className="bg-white rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">ID</th>
                                    <th className="py-3 px-6 text-left">User</th>
                                    <th className="py-3 px-6 text-left">Start</th>
                                    <th className="py-3 px-6 text-left">End</th>
                                    <th className="py-3 px-6 text-left">Reason</th>
                                    <th className="py-3 px-6 text-left">Status</th>
                                    <th className="py-3 px-6 text-left">Created At</th>
                                    <th className="py-3 px-6 text-left">Updated At</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {leaves.length > 0 ? (
                                    leaves.map(leave => (
                                        <tr key={leave.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">{leave.id}</td>
                                            <td className="py-3 px-6 text-left">{getUsername(leave.user_id)}</td>
                                            <td className="py-3 px-6 text-left">{leave.start_date}</td>
                                            <td className="py-3 px-6 text-left">{leave.end_date}</td>
                                            <td className="py-3 px-6 text-left">{leave.reason}</td>
                                            <td className="py-3 px-6 text-left">{leave.status}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(leave.created_at)}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(leave.updated_at)}</td>
                                            <td className="py-3 px-6 text-left">
                                                <a href={route('leave.form.edit', leave.id)} className="text-blue-600 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="py-3 px-6 text-left text-gray-600">No leaves found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default List;
