import React from "react";
import { NavBar } from "../../organisms";

export const PageTemplate = ({ header, footer, children }) => {
  return (
    <>
      {!header ? <NavBar /> : header}
      <main>{children}</main>
      {/* {!footer ? <Footer /> : footer} */}
    </>
  );
};
