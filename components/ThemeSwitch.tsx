"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useMantineColorScheme } from "@mantine/core";

function ThemeSwitch() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    return (
        <>
            <button
                className={`dark:text-white flex items-center justify-center w-[128px] px-4 py-2 rounded-md ${
                    colorScheme === "light"
                        ? "bg-white border-white drop-shadow-lg"
                        : ""
                }`}
                onClick={() => setColorScheme("light")}
            >
                <SunIcon className="w-5 h-5 mr-2" />
                Light
            </button>
            <button
                className={`dark:text-white flex items-center justify-center w-[128px] px-4 py-2 rounded-md ${
                    colorScheme === "dark"
                        ? "drop-shadow-lg border dark:bg-gray-800 dark:border-gray-600"
                        : ""
                }`}
                onClick={() => setColorScheme("dark")}
            >
                <MoonIcon className="w-5 h-5 mr-2" />
                Dark
            </button>
        </>
    );
}

export default ThemeSwitch;
