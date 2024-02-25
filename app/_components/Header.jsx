import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center gap-10 ">
        <Image src="/logo.svg" width={180} height={80} alt="logo" />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
