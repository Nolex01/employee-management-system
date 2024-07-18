import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-cover" style={{ backgroundImage: "url('https://i.imgur.com/aGgBQk5.jpeg')" }}>
            <nav className="bg-gray-200 shadow-lg">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:text-gray-800 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className={`${showingNavigationDropdown ? 'hidden' : 'block'} h-6 w-6`}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`${showingNavigationDropdown ? 'block' : 'hidden'} h-6 w-6`}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block h-8 w-auto text-gray-600" />
                                </Link>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {user.is_admin ? (
                                        <>
                                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                                Dashboard
                                            </NavLink>
                                            <NavLink href={route('statistics.list')} active={route().current('statistics.list')}>
                                                Statistics
                                            </NavLink>
                                            <NavLink href={route('employees.list')} active={route().current('employees.list')}>
                                                Employees
                                            </NavLink>
                                            <NavLink href={route('departments.list')} active={route().current('departments.list')}>
                                                Departments
                                            </NavLink>
                                            <NavLink href={route('roles.list')} active={route().current('roles.list')}>
                                                Roles
                                            </NavLink>
                                            <NavLink href={route('leaves.list')} active={route().current('leaves.list')}>
                                                Leaves
                                            </NavLink>
                                            <NavLink href={route('workhours.list')} active={route().current('workhours.list')}>
                                                Clock in/out
                                            </NavLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                                Dashboard
                                            </NavLink>
                                            <NavLink href={route('myleaves.list')} active={route().current('myleaves.list')}>
                                                Leaves
                                            </NavLink>
                                            <NavLink href={route('myworkhours.list')} active={route().current('myworkhours.list')}>
                                                Clock in/out
                                            </NavLink>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        className="flex items-center text-sm font-medium text-gray-600 focus:outline-none"
                                    >
                                        <span className="mr-1">{user.name}</span>

                                        <img src={`/storage/${user.avatar}`} alt="Avatar" className="h-12 w-12 rounded-full" />
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link method="post" href={route('logout')} as="button">
                                        Logout
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div className={`${showingNavigationDropdown ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="pt-2 pb-3 space-y-1">
                        {user.is_admin ? (
                            <>
                                <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('statistics.list')} active={route().current('statistics.list')}>
                                    Statistics
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('employees.list')} active={route().current('employees.list')}>
                                    Employees
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('departments.list')} active={route().current('departments.list')}>
                                    Departments
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('roles.list')} active={route().current('roles.list')}>
                                    Roles
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('leaves.list')} active={route().current('leaves.list')}>
                                    Leaves
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('workhours.list')} active={route().current('workhours.list')}>
                                    Clock in/out
                                </ResponsiveNavLink>
                            </>
                        ) : (
                            <>
                                <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('myleaves.list')} active={route().current('myleaves.list')}>
                                    Leaves
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('myworkhours.list')} active={route().current('myworkhours.list')}>
                                    Clock in/out
                                </ResponsiveNavLink>
                            </>
                        )}
                    </div>

                    <div className="pt-4 pb-3 border-t border-gray-300">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <img src={`/storage/${user.avatar}`} alt="Avatar" className="h-10 w-10 rounded-full" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-none text-gray-600">{user.name}</div>
                                <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                            </div>
                        </div>
                        <div className="mt-3 px-2">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Logout
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main className="pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-6">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
