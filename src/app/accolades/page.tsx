'use client'
import { Accolades } from "@/modules/accolades";
import {useAppContext} from "@/context/AppContext";
import Spinner from "@/app/loading";
import React from "react";
import NoPermissionPage from "@/modules/permission/NoPermissionPage";

const AccoladesPage = () => {
  const { isActiveSlackUser, isLoading } = useAppContext();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isActiveSlackUser) {
    return <NoPermissionPage/>;
  }

  return <Accolades />;
};

export default AccoladesPage;
