"use client";

import { useTheme } from "next-themes";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

export const SYSTEM = "system";
export const DARK = "dark";
export const LIGHT = "light";

function DarkModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === SYSTEM ? systemTheme : theme;

  return (
    <button
      className="text-primary-100 p-2 rounded-full hover:bg-primary-100 hover:text-snow-100 dark:bg-black dark:text-amber-200 dark:hover:bg-amber-200 dark:hover:text-black flex items-center transition dark:transition dark:duration-500 duration-500 focus:outline-none text-3xl"
      onClick={() => {
        setTheme(currentTheme === DARK ? LIGHT : DARK);
      }}
    >
      {currentTheme === DARK ? <BsMoonStarsFill /> : <IoSunny />}
    </button>
  );
}

export default DarkModeToggle;
