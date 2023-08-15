"use client"

import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
import Image from "next/image";
import { useTheme } from "next-themes";
// import Navlinks from "./Navlinks"
// import SearchBox from "./SearchBox";
function Header() {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <header>
            <div className="grid grid-cols-3 p-10 items-center">
            {
            currentTheme === 'dark' ? (
                <Image
                src="/logos/vector/default-monochrome.svg"
                alt="logo"
                height={40}
                width={160}
            />
            ) : (
                <Image
                src="/logos/vector/default-monochrome-black.svg"
                alt="logo"
                height={40}
                width={160}
            />
            )}
 
              
                <Link href="/" prefetch={false}>
                    <h1 className="font-serif text-4xl text-center">
                        Daily{" "}
                        <span className="underline decoration  decoration-[#D2B05C]">
                            Dawn
                        </span>{" "}
                        News
                    </h1>
                </Link>
                <div className="flex items-center justify-end space-x-2">
                    {/* {darkMode Button} */}
                    <DarkModeButton />
                    <button className="hidden md:inline bg-slate-900 text-white  px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
                        Subscribe to newsletter
                    </button>
                </div>

            </div>
            <NavLinks />
            <SearchBox />

        </header>
    );
}

export default Header;