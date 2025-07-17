import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigation } from "@/common";
import { classNames } from "@/utils";

export function Header() {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-white px-6 py-5 shadow-md sm:px-8">
      <Link href="/" className="text-2xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
        InterioScope
      </Link>
      <nav className="flex gap-x-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              pathName === item.href
                ? "text-indigo-700 font-semibold"
                : "text-gray-700 hover:text-indigo-700",
              "inline-flex items-center gap-x-2 text-base leading-7"
            )}
          >
            <item.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
