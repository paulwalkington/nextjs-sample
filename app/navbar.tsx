"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";

interface INavbarProps {}

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "shoppingCentres",
    label: "shopping centres",
    href: "/shopping-centres",
  }
];

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  return (
    <nav className="pb-4 md:pb-8 flex justify-between items-center">
      <Link
        href="/"
        className="text-lg md:text-3xl font-bold text-spotify-green"
      >
        webapp
      </Link>
     <ul className="flex justify-end items-center gap-4">
        {navItems.map((eachItem) => (
          <li key={eachItem.id}>
            <Link href={eachItem.href}>
              {eachItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;