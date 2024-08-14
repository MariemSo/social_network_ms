"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/meeting.png";
import { logIn } from "@/redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector(
    (state) => state.authSlice.authState.auth.isLoggedIn
  );

  const router = useRouter();
  const error = useAppSelector((state) => state.authSlice.authState.error);
  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth, router]);

  const onClickLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(logIn({ name }));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image alt="Logo" src={logo} className="mx-auto h-10 w-auto" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-900">
              Sign in
            </h2>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-white-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="userName"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={onClickLogin}
                >
                  Sign in
                </button>
                <p className="mt-10 text-center text-sm text-gray-500">
                  Not One of Us yet ?&nbsp;
                  <a
                    href="/auth/register"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Here You Go
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
