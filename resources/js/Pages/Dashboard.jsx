import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">Welcome back, {auth.user.name}!</h3>
                                    <p className="text-sm text-gray-600">Here's your Employee Management Dashboard.</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <img src={`/storage/${auth.user.avatar}`} alt="Avatar" className="h-12 w-12 rounded-full" />
                                </div>
                            </div>
                            
                            {auth.user.is_admin ? (
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Employees</h4>
                                        <p className="text-sm text-blue-700">Manage all employees in the system.</p>
                                    </div>
                                    <div className="bg-green-50 p-6 rounded-lg shadow-md">
                                        <h4 className="text-lg font-semibold text-green-800 mb-2">Leave Requests</h4>
                                        <p className="text-sm text-green-700">View and approve leave requests from employees.</p>
                                    </div>
                                    <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                                        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Roles & Departments</h4>
                                        <p className="text-sm text-yellow-700">Manage roles and departments and assign them to employees.</p>
                                    </div>
                                    <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                                        <h4 className="text-lg font-semibold text-purple-800 mb-2">Reports</h4>
                                        <p className="text-sm text-purple-700">Generate reports and download them as PDF/Excel file.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Clock In/Out</h4>
                                        <p className="text-sm text-blue-700">Manage your work hours.</p>
                                    </div>
                                    <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                                        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Leave Request</h4>
                                        <p className="text-sm text-yellow-700">Request leave from your manager.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
