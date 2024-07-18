import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

const List = ({ auth, employees }) => {

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
            <Head title="Employees" />

            <div className="py-6">
                <div className="mb-4 flex justify-between items-center">
                    <NavLink href={route('employee.create')} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Add new employee
                    </NavLink>
                    <a href={"/employees/export"} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Export Excel
                    </a>
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">ID</th>
                                    <th></th>
                                    <th className="py-3 px-6 text-left">Name</th>
                                    <th className="py-3 px-6 text-left">Email</th>
                                    <th className="py-3 px-6 text-left">Phone</th>
                                    <th className="py-3 px-1 text-left">Role</th>
                                    <th className="py-3 px-1 text-left">Department</th>
                                    <th className="py-3 px-6 text-left">Salary</th>
                                    <th className="py-3 px-1 text-left">Admin</th>
                                    <th className="py-3 px-6 text-left">Joined</th>
                                    <th className="py-3 px-6 text-left">Updated</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {employees.length > 0 ? (
                                    employees.map(employee => (
                                        <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">{employee.id}</td>
                                            <td className="py-3 px-6 text-left">
                                                <img src={`/storage/${employee.avatar}`} alt="Avatar" className="h-15 w-15 rounded-full" />
                                            </td>
                                            <td className="py-3 px-6 text-left">{employee.name}</td>
                                            <td className="py-3 px-6 text-left">{employee.email}</td>
                                            <td className="py-3 px-6 text-left">{employee.phone_number}</td>
                                            <td className="py-3 px-6 text-left">{employee.role_id}</td>
                                            <td className="py-3 px-6 text-left">{employee.department_id}</td>
                                            <td className="py-3 px-6 text-left">{employee.salary.toLocaleString('en-US')}</td>
                                            <td className="py-3 px-1 text-left">
                                                {employee.is_admin === 1 ? "Yes" : "No"}
                                            </td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(employee.created_at)}</td>
                                            <td className="py-3 px-6 text-left">{formatOrderTime(employee.updated_at)}</td>
                                            <td className="py-3 px-6 text-left">
                                                <a href={route('employee.form.edit', employee.id)} className="text-blue-600 hover:underline">Edit</a>
                                                <span className="mx-1">|</span>
                                                <a href={route('employee.form.delete', employee.id)} className="text-red-600 hover:text-red-900 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="10" className="py-3 px-6 text-left text-gray-600">No employees found.</td>
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
