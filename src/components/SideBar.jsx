import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ClipboardIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useLocation } from "react-router";
import {
  LocalLibraryOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { UserContext } from "../context/UserContext";
import { AuthController } from "../controllers/AuthController";

const navigation = [
  { name: "Jobs", href: "/job", icon: UsersIcon },
  { name: "Application Detail", href: "/application-detail", show: false },
  { name: "Application", href: "/application", icon: ClipboardIcon },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon },
  { name: "Courses", href: "/courses", icon: LocalLibraryOutlined },
  {
    name: "Certifications",
    href: "/certifications",
    icon: VerifiedUserOutlined,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SideBar(props) {
  const { user } = useContext(UserContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  const getTitle = () => {
    var path = navigation.find((n) => location.pathname.startsWith(n.href));
    return path ? path.name : "";
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map(
                    (item) =>
                      item.show !== false && (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === location.pathname
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.href === location.pathname
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-4 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      )
                  )}
                </nav>
              </div>
              <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <a href="/" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full  object-cover"
                        src={user !== null && user.image_url}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">
                        {user !== null &&
                          user.first_name + " " + user.last_name}
                      </p>
                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                        Logout
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img className="h-8 w-auto" src="/logo.png "alt="Logo" />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
                {navigation.map(
                  (item) =>
                    item.show !== false && (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === location.pathname
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.href === location.pathname
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    )
                )}
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full object-cover"
                      src={user !== null && user.image_url}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {user !== null && user.first_name + " " + user.last_name}
                    </p>
                    <div
                      className="text-xs font-medium text-gray-300 group-hover:text-gray-200 cursor-pointer"
                      onClick={AuthController.logout}
                    >
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6 md:min-h-screen flex flex-col">
            <div className="md max-w-7xl mr-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                {getTitle()}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full">
              <div className="py-4 h-full flex">{props.children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SideBar;
