"use client";
import { categories } from "../constants";
import { usePathname } from "next/navigation";
import Navlink from "./NavLink";


function NavLinks() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    };

    return (
        <nav className="grid grid-cols-4 text-xs md:grid-cols-7 md:text-sm pb-10 border-b max-w-7xl mx-auto	">
            {categories.map((category) => (
                <Navlink
                    key={category}
                    category={category}
                    isActive={isActive(category)}
                />
            ))}
        </nav>
    );
}
export default NavLinks;