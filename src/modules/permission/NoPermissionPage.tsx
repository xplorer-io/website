import React from "react";
import Image from "next/image";

const NoPermissionPage = () => {
    return (
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                <Image
                    src={"/images/illustrations/notFound.svg"}
                    width="1024"
                    height="768"
                    alt="Believe in power"
                    className="mx-auto h-56 w-auto text-black sm:h-64"
                />
                <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>
                <p className="mt-4 text-gray-500">Seems like you do not have enough permission.</p>
            </div>
        </div>
    )
}
export default NoPermissionPage;
