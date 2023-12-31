import { FC, Fragment } from "react";
import Link from "next/link";
import { Transition, Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 pb-3 border-b border-neutral-400 dark:border-neutral-700">
      <div className="hidden justify-between sm:flex">
        <Link href="/">
          <h1 className="sm:text-2xl text-xl font-semibold">zotsearch</h1>
        </Link>
        <div className="mt-1 space-x-8 text-xl">
          <Link href="/">Search</Link>
          <Link href="/about">About</Link>
        </div>
      </div>

      <div className="flex w-full justify-between rounded-lg sm:hidden">
        <Link href="/">
          <h1 className="sm:text-2xl text-xl font-semibold">zotsearch</h1>
        </Link>
        <Menu as="div" className="relative right-0">
          <Menu.Button as="div" className="focus:outline-none">
            <Bars3Icon className="h-7 w-7 "></Bars3Icon>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="div"
              className="absolute right-0 flex w-48 flex-col rounded-lg  border border-gray-400 
              bg-gray-200 p-2 text-gray-700 focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/"
                  >
                    {/* feel free to add an icon here */}
                    <h1>Search</h1>
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/about"
                  >
                    <h1>About</h1>
                    {/* feel free to add an icon here */}
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
