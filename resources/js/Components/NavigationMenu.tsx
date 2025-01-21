import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';

interface NavLinkProps {
    href: string;
    label: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    // tambahkan properti lain sesuai kebutuhan
}

interface Auth {
    user: User | null;
}

interface NavigationMenuProps {
    auth: Auth; // langsung mendefinisikan tipe auth
}

const NavLink = ({ href, label }: NavLinkProps) => {
    return (
        <Link
            className="group relative rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-white/55 focus:outline-none"
            href={href}
        >
            {label}
        </Link>
    );
};

const NavigationMenu = ({ auth }: NavigationMenuProps) => (
    <nav className="absolute z-10 flex w-full items-center justify-between bg-black/10 px-8 py-6 text-white backdrop-blur-sm">
        <Link
            href="/"
            className="text-4xl font-black transition-colors hover:text-yellow-200"
        >
            Gadgetku
        </Link>

        <div className="flex items-center gap-6 text-base font-semibold">
            <div className="flex items-center gap-4">
                <NavLink href="/trending" label="Trending" />
                <NavLink href="/category" label="Category" />

                {auth.user ? (
                    <NavLink href={route('dashboard')} label="Account" />
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="px-4 py-2 transition-colors hover:text-yellow-200"
                        >
                            Log In
                        </Link>
                        <Link
                            href={route('register')}
                            className="rounded-full bg-yellow-200 px-4 py-2 text-black transition-colors hover:bg-yellow-300"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
            <div className="relative">
                <ShoppingCart className="h-6 w-6 cursor-pointer text-yellow-200 transition-colors hover:text-yellow-300" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">
                    0
                </span>
            </div>
        </div>
    </nav>
);

export default NavigationMenu;
