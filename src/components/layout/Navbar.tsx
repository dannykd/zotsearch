import { FC, Fragment } from "react";
import Link from "next/link";
import { Transition, Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NextLink from "./NextLink";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="w-full border-b p-4 pb-2">
      <div className="hidden justify-between md:flex">
        <Link href="/">
          <h1 className="text-2xl font-bold text-black">INSERT_APP_NAME</h1>
        </Link>
        <div className="mt-1 space-x-8 text-xl font-semibold">
          <Link href="/INSERT_PAGE_PATH">INSERT_PAGE_NAME</Link>
          <Link href="/INSERT_PAGE_PATH">INSERT_PAGE_NAME</Link>
        </div>
      </div>

      <div className="flex w-full justify-between rounded-lg md:hidden">
        <Link href="/">
          <h1 className="text-2xl font-bold text-black">INSERT_APP_NAME</h1>
        </Link>
        <Menu as="div" className="relative right-0">
          <Menu.Button as="div" className="focus:outline-none">
            <Bars3Icon className="h-8 w-8 "></Bars3Icon>
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
                  <NextLink
                    href="/INSERT_PAGE_PATH"
                    pageName="INSERT_PAGE_NAME"
                  >
                    {/* feel free to add an icon here */}
                  </NextLink>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <NextLink
                    href="/INSERT_PAGE_PATH"
                    pageName="INSERT_PAGE_NAME"
                  >
                    {/* feel free to add an icon here */}
                  </NextLink>
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
