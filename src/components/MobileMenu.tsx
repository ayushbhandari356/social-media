"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='md:hidden'>
            <div
                className="flex flex-col gap-[4.5px] cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
                        isOpen ? "rotate-45" : ""
                    }`}
                ></div>
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm ease-in-out duration-500 ${
                        isOpen ? "opacity-0" : ""
                    }`}
                ></div>
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
                        isOpen ? "-rotate-45" : ""
                    }`}
                ></div>
            </div>
            {isOpen && (
                <div className="absolute top-24 left-0 bg-white w-full h-[calc(100vh-96px)] flex flex-col justify-center items-center gap-8 z-10 font-medium text-xl">
                    <Link href="/">Home</Link>
                    <Link href="/friends">Friends</Link>
                    <Link href="/group">Group</Link>
                    <Link href="/stories">Stories</Link>
                    <Link href="/login">Login</Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
 