import React from "react";
import Navbar from "@/components/navBar/Navbar";
import { useAppSelector } from "@/redux/store";

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuth = useAppSelector(
    (state) => state.userAuth.authState.auth.isLoggedIn
  );

  return (
    <>
      {isAuth && <Navbar />}
      {children}
    </>
  );
};

export default AuthWrapper;
