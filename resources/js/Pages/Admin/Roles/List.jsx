import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

export default function List({ auth, roles }) {

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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Roles</h2>}
        >
            <Head title="Roles" />

            <div className="py-6 px-4">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <NavLink href={route('role.create')}>
                    Add new role
                </NavLink>
            </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Roles</h3>
                        {roles.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Created</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles.map(role => (
                                            <tr key={role.id}>
                                                <td>{role.id}</td>
                                                <td>{role.name}</td>
                                                <td>{formatOrderTime(role.created_at)}</td>
                                                <td>{formatOrderTime(role.updated_at)}</td>
                                                <td><a href={route('role.form.delete', role.id)} className="text-blue-600 hover:underline">Delete</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p>No role found.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
