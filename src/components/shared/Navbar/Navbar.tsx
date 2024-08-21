"use client"
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
    const [isNavToggeled, setIsNavToggled] = useState(false);
    return (
        <nav className="flex justify-between item-center max-w-7xl mx-auto px-5 md:px-0 py-5">
            <Link href={'/'} className="text-xl md:text-3xl font-extrabold">
                <span className="text-success">Bijoy</span><span className="text-error">2024</span>
            </Link>
            {/* Desktop */}
            <ul className="hidden md:flex gap-x-14">
                {
                    navLinks.map(link => (
                        <li className="text-lg font-semibold text-black-100" key={link.path}><Link href={link.path}>{link.title}</Link></li>
                    ))
                }
            </ul>

            {/* Mobile */}
            <div className="block md:hidden relative">
                <button onClick={() => setIsNavToggled(prev => !prev)}>
                    <span className="text-3xl"><Icon icon={`material-symbols:${isNavToggeled ? 'close' : 'menu'}`} /></span>
                </button>
                <ul className={`${isNavToggeled ? "scale-y-100" : "scale-y-0"} absolute top-6 right-0 bg-white shadow-lg space-y-2 p-5 rounded-xl w-48 duration-200 origin-top`}>
                    {
                        navLinks.map(link => (
                            <li key={link.path}><Link href={link.path}>{link.title}</Link></li>
                        ))
                    }
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;