import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Statistics = ({ auth, users, roles, departments, leaves, workhours }) => {
    const totalUsers = users.length;

    const roleDistribution = roles.reduce((acc, role) => {
        acc[role.name] = users.filter(user => user.role_id === role.id).length;
        return acc;
    }, {});

    const departmentDistribution = departments.reduce((acc, department) => {
        acc[department.name] = users.filter(user => user.department_id === department.id).length;
        return acc;
    }, {});

    const totalLeaves = leaves.length;
    const pendingLeaves = leaves.filter(leave => leave.status === 'Pending').length;
    const approvedLeaves = leaves.filter(leave => leave.status === 'Approved').length;
    const rejectedLeaves = leaves.filter(leave => leave.status === 'Rejected').length;

    const averageWorkHours = calculateAverageWorkHours(workhours);

    function calculateAverageWorkHours(workhours) {
        if (workhours.length === 0) return 0;
        const totalWorkHours = workhours.reduce((acc, curr) => acc + calculateWorkHours(curr), 0);
        return totalWorkHours / workhours.length;
    }

    function calculateWorkHours(workhour) {
        const checkIn = new Date(workhour.check_in);
        const checkOut = new Date(workhour.check_out);
        const diff = (checkOut - checkIn) / (1000 * 60 * 60);
        return diff;
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Statistics" />
            
            <div className="py-6 px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">User Statistics</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                                    <p className="text-xl font-semibold text-blue-600">{totalUsers}</p>
                                    <p className="text-sm text-gray-600">Total Users</p>
                                </div>
                                <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                                    <p className="text-xl font-semibold text-yellow-600">{averageWorkHours.toFixed(2)}</p>
                                    <p className="text-sm text-gray-600">Average Work Hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">Roles Distribution</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(roleDistribution).map(([role, count]) => (
                                    <div key={role} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                        <p className="text-lg font-semibold text-gray-800">{role}</p>
                                        <p className="text-md text-gray-600">{count} Users</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">Departments Distribution</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(departmentDistribution).map(([department, count]) => (
                                    <div key={department} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                        <p className="text-lg font-semibold text-gray-800">{department}</p>
                                        <p className="text-md text-gray-600">{count} Users</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Leaves Overview</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                                    <p className="text-xl font-semibold text-blue-600">{totalLeaves}</p>
                                    <p className="text-sm text-gray-600">Total Leaves</p>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg shadow-md">
                                    <p className="text-xl font-semibold text-green-600">{pendingLeaves}</p>
                                    <p className="text-sm text-gray-600">Pending Leaves</p>
                                </div>
                                <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                                    <p className="text-xl font-semibold text-yellow-600">{approvedLeaves}</p>
                                    <p className="text-sm text-gray-600">Approved Leaves</p>
                                </div>
                                <div className="bg-red-100 p-4 rounded-lg shadow-md">
                                    <p className="text-xl font-semibold text-red-600">{rejectedLeaves}</p>
                                    <p className="text-sm text-gray-600">Rejected Leaves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Statistics;
