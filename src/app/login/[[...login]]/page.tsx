"use client";
import { signIn } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/buttons/button";
import { Lock } from "lucide-react";
import logo from "@public/logos/xplorer_logo.svg";
import Image from "next/image";
import Loading from "@/app/loading";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";

export default function Page() {
  const { isLoading: isSessionLoading } = useAppContext();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    try {
      await signIn("okta", { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign in error:", error);
      setIsSigningIn(false);
    }
  };

  const isLoading = isSigningIn || isSessionLoading;
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="flex items-center justify-center text-center text-3xl font-bold text-gray-900">
          Welcome to
          <Image
            src={logo}
            alt="Xplorers Logo"
            width={120}
            height={50}
            className="ml-2"
          />
        </h2>

        <p className="mt-2 text-center text-sm text-gray-600">
          If you are a member of our Slack Workspace, please login in
        </p>
      </div>
      <Card className="mt-8 py-4 shadow sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4">
          <div className="text-center">
            <Button disabled={isLoading} onClick={handleSignIn}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loading />
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign in with Okta"
              )}
            </Button>
          </div>

          <CardContent className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Sign in to continue to Xplorers
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Lock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Enterprise Security
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>Access is managed through Okta's Identity Provider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
