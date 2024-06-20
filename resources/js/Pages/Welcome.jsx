import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Home" />
                <div >
                    <header>
                        <nav>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className='mr-5'
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className='mr-5'
                                    >
                                        Register
                                    </Link>
                                    <Link
                                        className='mr-5'
                                    >
                                        Statistic
                                    </Link>
                                    <Link
                                        className='mr-5'
                                    >
                                        Employees
                                    </Link>
                                    <Link
                                        className='mr-5'
                                    >
                                        Leaves
                                    </Link>
                                    <Link
                                        className='mr-5'
                                    >
                                        Departments
                                    </Link>
                                    <Link
                                        className='mr-5'
                                    >
                                        Report
                                    </Link>
                                    <Link
                                        className='mr-5'
                                    >
                                        Work hours
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>
                </div>
        </>
    );
}
