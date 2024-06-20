import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

export default function List({ auth, employees }) {

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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employees</h2>}
        >
            <Head title="Employees" />

            <div className="py-6 px-4">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <NavLink href={route('employee.create')}>
                    Add new employee
                </NavLink>
            </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Employees</h3>
                        {employees.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Role ID</th>
                                            <th>Department ID</th>
                                            <th>Salary</th>
                                            <th>Admin</th>
                                            <th>Created</th>
                                            <th>Edited</th>
                                        </tr>
                                    </thead>    
                                    <tbody>
                                        {employees.map(employee => (
                                            <tr key={employee.id}>
                                                <td>{employee.id}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.phone_number}</td>
                                                <td>{employee.role_id}</td>
                                                <td>{employee.department_id}</td>
                                                <td>{employee.salary}</td>
                                                <td>{employee.is_admin}</td>
                                                <td>{formatOrderTime(employee.created_at)}</td>
                                                <td>{formatOrderTime(employee.updated_at)}</td>
                                                <td><a href={route('employee.form.edit', employee.id)} className="text-blue-600 hover:underline">Edit</a></td>
                                                <td><a href={route('employee.form.delete', employee.id)} className="text-blue-600 hover:underline">Delete</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p>No employees found.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
