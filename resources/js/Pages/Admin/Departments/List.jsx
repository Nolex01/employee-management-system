import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

const List = ({ auth, departments }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(departments.length / itemsPerPage);

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

    const currentData = departments.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Departments" />

            <div className="py-6 px-4">
                <div className="mb-4 flex justify-between items-center">
                    <NavLink href={route('department.create')} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Add new department
                    </NavLink>
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">ID</th>
                                    <th className="py-3 px-6 text-left">Name</th>
                                    <th className="py-3 px-6 text-left">Description</th>
                                    <th className="py-3 px-6 text-left">Created At</th>
                                    <th className="py-3 px-6 text-left">Updated At</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {currentData.length > 0 ? (
                                    currentData.map(department => (
                                        <tr key={department.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left whitespace-nowrap">{department.id}</td>
                                            <td className="py-3 px-6 text-left whitespace-nowrap">{department.name}</td>
                                            <td className="py-3 px-6 text-left">{department.description}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(department.created_at)}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(department.updated_at)}</td>
                                            <td className="py-3 px-6 text-left">
                                                <a href={route('department.form.delete', department.id)} className="text-red-600 hover:text-red-900 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="py-3 px-6 text-left text-gray-600">No departments found.</td>
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

export default List;
