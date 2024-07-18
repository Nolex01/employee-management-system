import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

const CreateLeaveForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        start_date: '',
        end_date: '',
        reason: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('leave.store'), {
            preserveScroll: true,
            ...data
        });
    };

    return (
        <section className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <header className="bg-gray-200 py-4 px-6">
                <h2 className="text-lg font-medium text-gray-900">Create Leave</h2>
            </header>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                    <InputLabel htmlFor="start_date" value="Start Date" />
                    <input
                        id="start_date"
                        type="date"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.start_date}
                        onChange={(e) => setData('start_date', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="end_date" value="End Date" />
                    <input
                        id="end_date"
                        type="date"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.end_date}
                        onChange={(e) => setData('end_date', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="reason" value="Reason" />
                    <input
                        id="reason"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={data.reason}
                        onChange={(e) => setData('reason', e.target.value)}
                    />
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

                <div className="flex justify-end">
                    <PrimaryButton disabled={processing}>
                        {processing ? 'Processing...' : 'Request Leave'}
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default CreateLeaveForm;
