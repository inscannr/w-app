import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Button from "./common/Button";
import Modal from "./common/Modal";
import LoginForm from "./LoginForm";
import ThemePicker from "./common/ThemePicker";
import { NavLink, useNavigate } from "react-router-dom";
import { useScrollPosition } from "./hooks/useScrollPosition";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Features", href: "/features" },
  { name: "Team", href: "/team" },
];

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navigationBackground = useScrollPosition();

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex h-16 items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
          navigationBackground
            ? "text-base-content bg-white/60 shadow-sm backdrop-blur dark:bg-slate-800/60 "
            : "text-primary-content"
        }`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div>
            <Button buttonType="secondary" onClick={() => navigate("/")}>
              Rescannr logo
            </Button>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-semibold leading-6  ${
                  isActive
                    ? "text-indigo-500 underline underline-offset-2"
                    : "text-gray-900 dark:text-slate-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="w-40 px-4">
            <ThemePicker />
          </div>

          <div className="w-32">
            <Button buttonType="secondary" onClick={() => setOpenModal(true)}>
              <span className="flex items-center justify-center">
                Log in
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 dark:bg-slate-900 lg:hidden ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-slate-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 dark:text-slate-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setOpenModal(true);
                  }}
                  className="-mx-3 block w-full rounded-lg py-2.5 px-3 text-left text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10 dark:text-slate-200"
                >
                  Log in
                </button>
              </div>
              <div className="w-full py-6">
                <ThemePicker />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <LoginForm />
      </Modal>
    </>
  );
}

export default Navbar;
