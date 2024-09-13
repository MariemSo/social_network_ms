"use client";
import UserCard from "@/components/UserCard";
import { useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Community = () => {
  const isAuth = useAppSelector(
    (state) => state.userAuth.authState.auth.isLoggedIn
  );
  const users = useAppSelector((state) => state.userAuth.userState.users);
  const currentUserId = useAppSelector(
    (state) => state.userAuth.authState.auth.currentUserId
  );

  useEffect(() => {
    if (!isAuth) {
      redirect("/auth/login");
    }
  }, [isAuth]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 px-4">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users
            .filter((user) => user.id !== currentUserId)
            .map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                profilePicture={user.profilePicture}
                statusMessage={user.statusMessage}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
