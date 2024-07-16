import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

const CreateLeaveForm = () => {
    const { data, setData, post, processing } = useForm({
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
        <section className="max-w-xl">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Create Leave</h2>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="start_date" value="Start Date" />
                    <input
                        id="start_date"
                        type="date"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        value={data.start_date}
                        onChange={(e) => setData('start_date', e.target.value)}
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
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Request Leave</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default CreateLeaveForm;
