import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Statistics({ auth, users, roles, departments, leaves, workhours }) {
    const totalUsers = users.length;

    const roleDistribution = {};
    roles.forEach(role => {
        roleDistribution[role.name] = users.filter(user => user.role_id === role.id).length;
    });

    const departmentDistribution = {};
    departments.forEach(department => {
        departmentDistribution[department.name] = users.filter(user => user.department_id === department.id).length;
    });

    const totalLeaves = leaves.length;
    const pendingLeaves = leaves.filter(leave => leave.status === 'pending').length;
    const approvedLeaves = leaves.filter(leave => leave.status === 'approved').length;
    const rejectedLeaves = leaves.filter(leave => leave.status === 'rejected').length;

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
            header={<h2>Statistics</h2>}
        >
            <Head title="Statistics" />
            
            <div>
                <h3>Total Users: {totalUsers}</h3>

                <h3>Roles Distribution:</h3>
                <ul>
                    {Object.entries(roleDistribution).map(([role, count]) => (
                        <li key={role}>{role}: {count}</li>
                    ))}
                </ul>

                <h3>Departments Distribution:</h3>
                <ul>
                    {Object.entries(departmentDistribution).map(([department, count]) => (
                        <li key={department}>{department}: {count}</li>
                    ))}
                </ul>

                <h3>Leaves Overview:</h3>
                <ul>
                    <li>Total Leaves: {totalLeaves}</li>
                    <li>Pending Leaves: {pendingLeaves}</li>
                    <li>Approved Leaves: {approvedLeaves}</li>
                    <li>Rejected Leaves: {rejectedLeaves}</li>
                </ul>

                <h3>Work Hours Overview:</h3>
                <p>Average Work Hours: {averageWorkHours.toFixed(2)} hours per user</p>
            </div>
        </AuthenticatedLayout>
    );
}
