import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { navigation } from "@/common";
import { classNames } from "@/utils";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen(open: boolean): void;
};

export function MobileSidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathName = usePathname();

  return (
<Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/90" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-indigo-400 hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <aside className="flex grow flex-col gap-y-6 overflow-y-auto bg-white px-8 pb-4 ring-1 ring-gray-200 shadow-lg rounded-r-lg border border-gray-200">
                <div className="flex h-20 shrink-0 items-center border-b border-gray-300 pb-4">
                  <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent">
                    Interior Designer
                  </h1>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-8">
                    <li>
                      <ul role="list" className="-mx-2 space-y-2">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                pathName === item.href
                                  ? "bg-indigo-100 text-indigo-700 shadow"
                                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700",
                                "group flex gap-x-4 rounded-md px-4 py-3 text-base font-semibold leading-7 transition-all duration-300"
                              )}
                            >
                              <item.icon
                                className="h-7 w-7 shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </aside>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
