"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const isAuth = useAppSelector(
    (state) => state.userAuth.authState.auth.isLoggedIn
  );

  useEffect(() => {
    if (!isAuth) {
      redirect("/auth/login");
    }
  }, [isAuth]);

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center"></h2>
        <Dashboard />
      </div>
    </main>
  );
}
