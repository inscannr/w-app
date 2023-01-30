import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function ThemePicker() {
  const [theme, setTheme] = useState<string>();

  const menu = [
    {
      title: "light",
      icon: <SunIcon className="mr-2 h-5 w-5" />,
    },
    {
      title: "dark",
      icon: <MoonIcon className="mr-2 h-5 w-5" />,
    },
    {
      title: "system",
      icon: <ComputerDesktopIcon className="mr-2 h-5 w-5" />,
    },
  ];

  useEffect(() => {
    if (!theme) return;
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      localStorage.removeItem("theme");
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) setTheme(localStorageTheme);
    else setTheme("system");
  }, []);

  const findMenuLogo = menu.find((item) => item.title === theme);

  return (
    <div className="px-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex h-10 w-32 items-center justify-center rounded-md bg-black bg-opacity-20 px-3.5 py-1.5 text-sm font-medium text-gray-900 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-slate-700 dark:text-slate-200 dark:opacity-80">
            <span>{findMenuLogo?.icon}</span>
            <span className="w-full capitalize">{theme}</span>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md border bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-slate-600 dark:bg-slate-900">
            <div className="px-1 py-1 ">
              {menu.map((item) => (
                <Menu.Item key={item.title}>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-violet-500 text-white"
                          : "text-gray-900 dark:text-slate-200"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => setTheme(item.title)}
                    >
                      {item.icon}
                      <span className="capitalize">{item.title}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
