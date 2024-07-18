import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';

const UpdateLeaveForm = ({ leave }) => {
    const { data, setData, patch, processing, recentlySuccessful, errors } = useForm({
        user_id: leave.user_id,
        start_date: leave.start_date,
        end_date: leave.end_date,
        reason: leave.reason,
        status: leave.status
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('leave.edit', leave.id), {
            preserveScroll: true
        });
    };

    return (
        <section className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <header className="bg-gray-200 py-4 px-6">
                <h2 className="text-lg font-medium text-gray-900">Edit Leave</h2>
            </header>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                    <InputLabel htmlFor="user_id" value="User ID" />
                    <TextInput
                        id="user_id"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        value={data.user_id}
                        readOnly
                    />
                </div>

                <div>
                    <InputLabel htmlFor="start_date" value="Start Date" />
                    <input
                        id="start_date"
                        type="date"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        value={data.start_date}
                        onChange={(e) => setData('start_date', e.target.value)}
                        readOnly
                    />
                </div>

                <div>
                    <InputLabel htmlFor="end_date" value="End Date" />
                    <input
                        id="end_date"
                        type="date"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        value={data.end_date}
                        onChange={(e) => setData('end_date', e.target.value)}
                        readOnly
                    />
                </div>

                <div>
                    <InputLabel htmlFor="reason" value="Reason" />
                    <input
                        id="reason"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        value={data.reason}
                        onChange={(e) => setData('reason', e.target.value)}
                        readOnly
                    />
                </div>

                <div>
                    <label htmlFor="status" className="block font-medium text-sm text-gray-700 mb-1">
                        Status
                    </label>
                    <select
                        id="status"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700">
                        <p className="font-bold">Please fix the following errors:</p>
                        <ul className="list-disc list-inside">
                            {Object.keys(errors).map((key) => (
                                <li key={key}>{errors[key]}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
};

export default UpdateLeaveForm;
