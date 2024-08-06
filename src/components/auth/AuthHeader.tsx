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
            <Button className="bg-primary-400 hover:bg-primary dark:bg-primary-400 dark:text-white dark:hover:bg-primary">
              Login
            </Button>
          </Link>
          {/* <Link href="/register">
            <Button
              variant="secondary"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition focus:outline-none focus:ring"
            >
              Register
            </Button>
          </Link> */}
        </div>
      ) : (
        <UserButton />
      )}
    </>
  );
};
export default AuthHeader;
