import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Spinner from "@/app/loading";
import React from "react";
import { Button } from "@/components/ui/buttons/button";
import { signOut } from "next-auth/react";
import Image from "next/image";

const AuthHeader = () => {
  const { isLoggedIn, isLoading, user } = useAppContext();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex items-center gap-3 sm:gap-3">
          <Link href="/login">
            <Button className="border border-gray-200 bg-primary-400 transition focus:outline-none focus:ring dark:bg-primary-400">
              Login
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {/* {user?.image && (
            <Image
              src={user.image}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          )} */}
          <p>{user?.name}</p>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      )}
    </>
  );
};
export default AuthHeader;
