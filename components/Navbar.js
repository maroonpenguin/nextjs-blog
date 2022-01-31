import Link from "next/link";
import { Menu } from "@headlessui/react";

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <Link href="/">
                <a className="flex-shrink-0 text-3xl uppercase font-black text-teal-900">
                  きゅうりブログ
                </a>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="text-gray-800 hover:text-gray-500 hover:border-b-2 hover:border-teal-800 dark:hover:text-white px-3 py-2 text-sm font-medium">
                      Home
                    </a>
                  </Link>
                  {/* <Link href="#">
                    <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Blog
                    </a>
                  </Link> */}
                  <Link href="/contact">
                    <a className="text-gray-800 hover:text-gray-500 hover:border-b-2 hover:border-teal-800 dark:hover:text-white px-3 py-2 text-sm font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <Menu as="div" className="relative inline-block ">
              <Menu.Button className="-mr-2 flex md:hidden">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Menu.Button>

              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item className="block text-gray-800 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <MyLink href="/">Home</MyLink>
                </Menu.Item>
                {/* <Menu.Item className="block text-gray-800 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <MyLink href="#">Blog</MyLink>
                </Menu.Item> */}
                <Menu.Item className="block text-gray-800 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <MyLink href="/contact">Contact</MyLink>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  );
};
