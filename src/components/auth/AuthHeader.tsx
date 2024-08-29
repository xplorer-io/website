import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { UserButton } from "@clerk/nextjs";
import Spinner from "@/app/loading";
import React from "react";
import { Button } from "@/components/ui/buttons/button";

const AuthHeader = () => {
  const { isLoggedIn, isLoading } = useAppContext();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex items-center gap-3 sm:gap-3">
          <Link href="/login">
            <Button className="border border-gray-200 bg-primary-400 text-gray-500 transition hover:border-primary-400 hover:text-gray-700 focus:outline-none focus:ring dark:bg-primary-400">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button
              variant="secondary"
              className="border border-gray-200 text-gray-500 transition focus:outline-none focus:ring"
            >
              Register
            </Button>
          </Link>
        </div>
      ) : (
        <UserButton />
      )}
    </>
  );
};
export default AuthHeader;
