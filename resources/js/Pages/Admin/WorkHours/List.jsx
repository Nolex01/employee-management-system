import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const List = ({ auth, workhours, users }) => {

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
            <Head title="WorkHours" />

            <div className="py-6 px-4">
                <div className="bg-white rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">ID</th>
                                    <th className="py-3 px-6 text-left">User</th>
                                    <th className="py-3 px-6 text-left">Check In</th>
                                    <th className="py-3 px-6 text-left">Check Out</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {workhours.length > 0 ? (
                                    workhours.map(workhour => (
                                        <tr key={workhour.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">{workhour.id}</td>
                                            <td className="py-3 px-6 text-left">{getUsername(workhour.user_id)}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(workhour.check_in)}</td>
                                            <td className="py-3 px-6 text-left">{workhour.check_out ? formatOrderTime(workhour.check_out) : "Not Yet"}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="py-3 px-6 text-left text-gray-600">No workhours found.</td>
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
