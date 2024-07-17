import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

const List = ({ auth, roles }) => {

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
            <Head title="Roles" />

            <div className="py-6 px-4">
                <div className="mb-4 flex justify-between items-center">
                    <NavLink href={route('role.create')} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Add new role
                    </NavLink>
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">ID</th>
                                    <th className="py-3 px-6 text-left">Name</th>
                                    <th className="py-3 px-6 text-left">Created At</th>
                                    <th className="py-3 px-6 text-left">Updated At</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {roles.length > 0 ? (
                                    roles.map(role => (
                                        <tr key={role.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left whitespace-nowrap">{role.id}</td>
                                            <td className="py-3 px-6 text-left">{role.name}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(role.created_at)}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(role.updated_at)}</td>
                                            <td className="py-3 px-6 text-left">
                                                <a href={route('role.form.delete', role.id)} className="text-blue-600 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="py-3 px-6 text-left text-gray-600">No roles found.</td>
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
