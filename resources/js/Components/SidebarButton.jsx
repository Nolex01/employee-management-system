import { Link } from '@inertiajs/react';

export default function SidebarButton({ href, method = 'get', as = 'a', active = false, children }) {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out
                ${active 
                    ? 'bg-gray-300 text-gray-800' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:bg-gray-100 focus:text-gray-800'}`}
        >
            {children}
        </Link>
    );
}
