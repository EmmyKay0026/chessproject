import React from "react";

export const Text = ({ className, type, children }) => {
  if (type === "h1") {
    return <h1 className={className}>{children}</h1>;
  }
  if (type === "h2") {
    return <h2 className={className}>{children}</h2>;
  }
  if (type === "h3") {
    return <h3 className={className}>{children}</h3>;
  }
  if (type === "h4") {
    return <h4 className={className}>{children}</h4>;
  }
  if (type === "h5") {
    return <h5 className={className}>{children}</h5>;
  }
  return <span className={className}>{children}</span>;
};
