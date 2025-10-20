"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./Navlink.module.css";

const Navlink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${classes.link} ${
        path.startsWith(href) ? classes.active : undefined
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
