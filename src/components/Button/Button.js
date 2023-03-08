import React from "react";

import "./Button.css";

export const Button = ({
   children,
    href,
    type,
    className,
    ...props }) => {

  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return <button className={className} type={type} {...props}>{children}</button>;
};
