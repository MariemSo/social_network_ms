import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { logOut } from "@/redux/reducers/userAuthSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";

const DropDownNav = () => {
  const currentUserId = useAppSelector(
    (state) => state.userAuth.authState.auth.currentUserId
  );
  const users = useAppSelector((state) => state.userAuth.userState.users);
  const currentUser = users.find((user) => user.id === currentUserId);
  const defaultProfilePicture =
    "https://www.revixpert.ch/app/uploads/portrait-placeholder-214x300.jpg";
  const dispatch = useDispatch<AppDispatch>();
  const onClickSignOut = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(logOut());
    redirect("/auth/login");
  };

  return (
    <>
      {/* Profile dropdown */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          type="button"
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <BellIcon aria-hidden="true" className="h-6 w-6" />
        </button>
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                <img
                  alt=""
                  src={currentUser?.profilePicture || defaultProfilePicture}
                  className="h-full w-full object-cover"
                />
              </div>
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <button
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                onClick={onClickSignOut}
              >
                Sign out
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </>
  );
};

export default DropDownNav;
