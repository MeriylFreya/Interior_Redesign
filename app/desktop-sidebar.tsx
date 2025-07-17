import { usePathname } from "next/navigation";
import { navigation } from "@/common";
import { classNames } from "@/utils";
import Link from "next/link";

export function DesktopSidebar() {
  const pathName = usePathname();

  return (
<aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-6 overflow-y-auto bg-white px-8 py-6 shadow-lg rounded-r-lg border border-gray-200">
        <div className="flex h-20 shrink-0 items-center border-b border-gray-300 pb-4">
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent">
            InterioScope
          </h1>
        </div>

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-8">
            <li>
              <ul role="list" className="-mx-2 space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        pathName === item.href
                          ? "bg-white text-indigo-700 shadow"
                          : "text-gray-700 hover:bg-white hover:text-indigo-700",
                        "group flex gap-x-4 rounded-md px-4 py-3 text-base font-semibold leading-7 transition-all duration-300"
                      )}
                    >
                      <item.icon
                        className="h-7 w-7 shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
