"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isAuth = useAppSelector(
    (state) => state.authSlice.authState.auth.isLoggedIn
  );
  console.log(isAuth);

  useEffect(() => {
    if (!isAuth) {
      router.push("/auth/login");
    }
  }, [isAuth]);

  return <main></main>;
}
