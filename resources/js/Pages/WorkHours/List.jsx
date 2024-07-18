import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

const List = ({ auth, workhours }) => {

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
        <AuthenticatedLayout user={auth.user}>
            <Head title="WorkHours" />

            <div className="py-6 px-4">
                <div className='flex justify-center mb-10'>
                    <NavLink href={route('clockin.create')} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Clock in
                    </NavLink>
                    <NavLink href={route('clockout.create')} className="bg-red-500 text-white font-bold py-2 px-4 rounded ml-4">
                        Clock out
                    </NavLink>
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">ID</th>
                                    <th className="py-3 px-6 text-left">Check In</th>
                                    <th className="py-3 px-6 text-left">Check Out</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {workhours.length > 0 ? (
                                    workhours.map(workhour => (
                                        <tr key={workhour.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">{workhour.id}</td>
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
