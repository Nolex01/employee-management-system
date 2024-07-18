import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';

const AvatarUpload = ({ initialAvatar, onSuccess }) => {
    const { data, setData, post, processing, recentlySuccessful, errors } = useForm({
        avatar: null,
    });

    const [avatarPreview, setAvatarPreview] = useState(initialAvatar);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (data.avatar) {
            formData.append('avatar', data.avatar);
        }

        post(route('avatar.update'), formData, {
            onSuccess: () => {
                onSuccess();
                setData('avatar', null);
                setAvatarPreview(null);
            }
        });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setData('avatar', file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setAvatarPreview(null);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <InputLabel htmlFor="avatar" value="Avatar" />
                <input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    onChange={handleAvatarChange}
                />
                {avatarPreview && (
                    <img src={avatarPreview} alt="Avatar Preview" className="mt-2 h-20 w-20 object-cover rounded-full" />
                )}
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
                <PrimaryButton disabled={processing}>Upload Avatar</PrimaryButton>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">Avatar uploaded.</p>
                </Transition>
            </div>
        </form>
    );
};

export default AvatarUpload;
