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

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Features", href: "#" },
  { name: "Team", href: "#" },
];

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <h1 className="text text-lg font-semibold text-indigo-600">
              Rescannr logo
            </h1>
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
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200"
              >
                {item.name}
              </a>
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
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <LoginForm />
      </Modal>
    </>
  );
}

export default Navbar;
