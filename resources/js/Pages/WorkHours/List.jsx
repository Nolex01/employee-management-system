import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

export default function List({ auth, workhours }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(workhours.length / itemsPerPage);

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

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const currentData = workhours.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
                                {currentData.length > 0 ? (
                                    currentData.map(workhour => (
                                        <tr key={workhour.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">{workhour.id}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(workhour.check_in)}</td>
                                            <td className="py-3 px-6 text-left">{workhour.check_out ? formatOrderTime(workhour.check_out) : "Not Yet"}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="py-3 px-6 text-left text-gray-600">No workhours found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-gray-700">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
