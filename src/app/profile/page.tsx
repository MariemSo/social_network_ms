"use client";
import { useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import AddFriends from "@/components/addFriends";
import UpdatePicForm from "@/components/UpdatePicForm";
import StatusForm from "@/components/StatusForm";

const ProfilePage = () => {
  const isAuth = useAppSelector(
    (state) => state.userAuth.authState.auth.isLoggedIn
  );

  useEffect(() => {
    if (!isAuth) {
      redirect("/auth/login");
    }
  }, [isAuth]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <UpdatePicForm />
            <StatusForm />
          </div>

          <AddFriends />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
