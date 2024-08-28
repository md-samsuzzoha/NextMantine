"use client";
import {
    ArrowLeftOnRectangleIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    CogIcon,
    FolderIcon,
    NewspaperIcon,
    ShieldExclamationIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(1);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!dropdownRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <header className="w-full bg-[#dee8fe] text-black dark:bg-gray-800 dark:border-b-2 dark:border-b-slate-500">
            <nav className="max-w-[1440px] mx-auto flex justify-end items-end  py-4 relative font-inter">
                <div className="dark:bg-gray-800 dark:border-gray-600 bg-[#fafbfc] border relative flex items-center p-2 rounded-md shadow-md pb-1">
                    <Image
                        src="/images/user.jpg"
                        alt="User"
                        width={50}
                        height={50}
                        className="object-contain rounded-full"
                    />
                    <div className="flex flex-col items-start px-4">
                        <span className="font-medium dark:text-white">
                            Stacy Jones
                        </span>
                        <span
                            style={{ color: "#6a717e" }}
                            className="pointer-events-none select-none"
                        >
                            Micro
                        </span>
                    </div>
                    {isOpen ? (
                        <ChevronUpIcon
                            onClick={toggleDropdown}
                            aria-expanded={isOpen}
                            className="dark:text-white w-8 h-8 cursor-pointer font-bold user-select-none"
                        />
                    ) : (
                        <ChevronDownIcon
                            onClick={toggleDropdown}
                            className="dark:text-white w-8 h-8 cursor-pointer font-bold user-select-none"
                        />
                    )}
                </div>

                {isOpen && (
                    <div
                        ref={dropdownRef}
                        className="dark:bg-gray-800 dark:border-gray-600 border absolute right-0 top-20 mt-1 bg-white rounded-md drop-shadow-lg w-58 transition-all duration-300 ease-in-out z-10"
                    >
                        <ul className="py-2">
                            {[
                                { icon: UserIcon, text: "Accounts" },
                                { icon: CogIcon, text: "Settings" },
                                { icon: FolderIcon, text: "FAQ's" },
                                { icon: NewspaperIcon, text: "Q&A's" },
                                {
                                    icon: ShieldExclamationIcon,
                                    text: "Help/Support",
                                },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center px-4 py-2 dark:text-white dark:hover:text-black hover:bg-gray-100 cursor-pointer"
                                >
                                    <item.icon className="w-5 h-5 mr-2" />
                                    {item.text}
                                </li>
                            ))}
                            <li className="flex items-center justify-around px-4 py-2 cursor-pointer space-x-4">
                                <ThemeSwitch />
                            </li>
                            <div className="px-4 py-2 text-gray-600">
                                <div className="dark:text-white text-[#404040]">
                                    SWITCH ACCOUNTS
                                </div>
                                <div className="flex flex-col items-start mt-4">
                                    {[1, 2].map((user) => (
                                        <div
                                            key={user}
                                            className={`dark:bg-gray-800 dark:border-gray-600 border-white w-full flex items-center space-x-4 rounded-md px-4 py-2 mb-2 cursor-pointer ${
                                                selectedUser === user
                                                    ? "drop-shadow-lg bg-white dark:border"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleUserSelect(user)
                                            }
                                        >
                                            <Image
                                                src="/images/user2.jpg"
                                                alt="User"
                                                width={60}
                                                height={60}
                                                className="object-contain rounded-full"
                                            />
                                            <div className="flex flex-col items-start">
                                                <span className="font-medium text-lg dark:text-white">
                                                    {user === 1
                                                        ? "Advertiser"
                                                        : "Recruiter"}
                                                </span>
                                                <span className="font-extrabold text-xl dark:text-white">
                                                    Sky Jones
                                                </span>
                                                <span
                                                    style={{ color: "#6a717e" }}
                                                    className="text-sm"
                                                >
                                                    skyjones@gmail.com
                                                </span>
                                            </div>
                                            {selectedUser === user && (
                                                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className={`dark:bg-gray-800 dark:border-gray-600 dark:text-white border border-white flex items-center justify-center w-full px-4 py-2 mt-4 bg-white text-black rounded-md drop-shadow-lg hover:font-bold`}
                                >
                                    <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-2" />
                                    Sign out
                                </button>
                            </div>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
