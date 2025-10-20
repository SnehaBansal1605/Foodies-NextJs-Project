import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBg from "./MainHeaderBg";
import Image from "next/image";
import Navlink from "./Navlink";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" /> NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
