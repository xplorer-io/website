import React from "react";

type PagesWrapperProps = {
  children: React.ReactNode;
};

const PagesWrapper = ({ children }: PagesWrapperProps) => {
  return <section className="container mx-auto px-4 py-8">{children}</section>;
};
export default PagesWrapper;
