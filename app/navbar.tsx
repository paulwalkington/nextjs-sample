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
    <nav className="bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-700 text-white px-6 py-5 rounded-b-3xl shadow-xl shadow-violet-500/20 mb-8 flex justify-between items-center">
      <Link href="/" className="text-lg md:text-3xl font-bold tracking-tight">
        webapp
      </Link>
      <ul className="flex justify-end items-center gap-6">
        {navItems.map((eachItem) => (
          <li key={eachItem.id}>
            <Link
              href={eachItem.href}
              className={`text-sm md:text-base uppercase tracking-[0.18em] transition duration-300 hover:text-sky-200 ${
                isActive(eachItem.href)
                  ? "border-b-2 border-white text-white font-semibold"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {eachItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;