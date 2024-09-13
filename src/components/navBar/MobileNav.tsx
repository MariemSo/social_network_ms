import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Community", href: "/Community" },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MobileNav = () => {
  const currentPath = usePathname();
  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <DisclosureButton
              as="div"
              aria-current={currentPath === item.href ? "page" : undefined}
              className={classNames(
                currentPath === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          </Link>
        ))}
      </div>
    </DisclosurePanel>
  );
};

export default MobileNav;
