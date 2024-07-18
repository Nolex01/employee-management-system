import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';

const AvatarUpload = ({ initialAvatar, onSuccess }) => {
    const { data, setData, post, processing, recentlySuccessful } = useForm({
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
