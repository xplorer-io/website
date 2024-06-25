import Link from "next/link";
import {useAppContext} from "@/context/AppContext";
import {UserButton} from "@clerk/nextjs";

export const AuthHeader = () => {
    const {isLoggedIn, isLoading} = useAppContext();

    // TODO please add a spinner component
    if (isLoading) {
        return <span>Loading....</span>;
    }

    return (
        <>
            {!isLoggedIn ? (
                <div className="flex items-center gap-3 sm:gap-3">
                    <Link href="/login">
                         {/*TODO Buttons could be reusable*/}
                        <button
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            <span className="text-sm font-medium">Login </span>

                        </button>
                    </Link>
                    <Link href="/register">
                        <button
                            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            Register
                        </button>
                    </Link>
                </div>
            ) : (
                <UserButton/>
            )}
        </>
    );
};
