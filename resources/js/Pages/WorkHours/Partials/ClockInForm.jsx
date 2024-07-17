import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

const ClockInForm = () => {
    const { data, setData, post, processing } = useForm({
        check_in: '',
    });

    const [readableTimestamp, setReadableTimestamp] = useState('');

    useEffect(() => {
        const now = new Date();
        const isoString = now.toISOString();

        const readableString = now.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).replace(',', '');

        setReadableTimestamp(readableString);
        setData('check_in', isoString);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('workhour.store'), {
            preserveScroll: true,
            ...data
        });
    };

    return (
        <section className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <header className="bg-gray-200 py-4 px-6">
                <h2 className="text-lg font-medium text-gray-900">Clock In</h2>
            </header>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                    <InputLabel htmlFor="check_in" value="Check In" />
                    <input
                        id="check_in"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        value={readableTimestamp}
                        readOnly
                    />
                </div>

                <div className="flex justify-end">
                    <PrimaryButton disabled={processing}>
                        {processing ? 'Processing...' : 'Check In'}
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default ClockInForm;
