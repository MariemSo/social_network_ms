"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";

export default function Home() {
  const isAuth = useAppSelector(
    (state) => state.userAuth.authState.auth.isLoggedIn
  );

  useEffect(() => {
    if (!isAuth) {
      redirect("/auth/login");
    }
  }, [isAuth]);

  return <main></main>;
}
