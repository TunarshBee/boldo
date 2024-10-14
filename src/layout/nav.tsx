/* eslint-disable @typescript-eslint/no-explicit-any */
// Import necessary modules
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, LegacyRef } from "react";
import { Button, Icon } from "@/src/shared";

// Define navigation links
const NAV_LINKS = [
  { text: "Product", href: "/" },
  { text: "Services", href: "/" },
  { text: "About", href: "/" },
];

// Desktop navigation component
export function DesktopNavigation() {
  return (
    <div className="hidden lg:flex items-center gap-10">
      {NAV_LINKS.map((link, index) => (
        <Link key={index} href={link.href} className="text-lg font-semibold">
          {link.text}
        </Link>
      ))}
      <Button
        text="Log In"
        color="#000"
        className="bg-white py-1 px-2 border-primary border-2"
      />
    </div>
  );
}

// Mobile navigation component
export function MobileNavigation({
  isOpen,
  menuRef,
  toggleMenu,
}: {
  isOpen: boolean;
  menuRef: LegacyRef<HTMLDivElement>;
  toggleMenu: () => void;
}) {
  return (
    <div
      ref={menuRef}
      className={`absolute top-16 right-0 w-3/6 bg-primary rounded-md lg:hidden transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col items-center py-4 gap-4">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-lg text-white py-1 px-[40px] font-semibold hover:border-2 border-white rounded-full"
            onClick={() => toggleMenu()}
          >
            {link.text}
          </Link>
        ))}
        <Button
          text="Log In"
          color="#fff"
          className="bg-transparent border-2 border-white py-1 px-2"
        />
      </div>
    </div>
  );
}

// Main Navbar component
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="relative flex items-center justify-between p-4 mb-16">
      <Link href="/" aria-label="Homepage">
        <Image
          src="/images/Logo-black.png"
          alt="Website logo"
          width={162}
          height={42}
        />
      </Link>
      <div className="lg:hidden">
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="text-black outline-none"
        >
          {isOpen ? <Icon name="close" /> : <Icon name="menu" />}
        </button>
      </div>
      <DesktopNavigation />
      {isOpen && (
        <MobileNavigation
          isOpen={isOpen}
          menuRef={menuRef}
          toggleMenu={toggleMenu}
        />
      )}
    </nav>
  );
}
