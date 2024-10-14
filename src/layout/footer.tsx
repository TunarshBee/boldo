import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/src/components";

interface IFooterLink {
  isHiring?: boolean;
  header: string;
  links: string[];
}

const Links: IFooterLink[] = [
  {
    header: "Landings",
    links: ["Home", "Products", "Services"],
  },
  {
    header: "Company",
    links: ["Home", "Careers", "Services"],
    isHiring: true,
  },
  {
    header: "Resources",
    links: ["Blog", "Products", "Services"],
  },
];

export function Footer() {
  return (
    <section className="w-full container-side-spacing">
      <div className="container mx-auto py-[100px] grid grid-cols-1 lg:grid-cols-[5fr_7fr]">
        <div>
          <Image
            src="/images/logo-black.png"
            alt="logo"
            width={156}
            height={41}
            className="mb-[40px]"
          />
          <p className="text-grey text-[16px] max-w-[300px] mb-[64px]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[150px]">
          {Links.map((item, index) => (
            <div key={index}>
              <h4 className="text-[20px] font-bold mb-[32px]">{item.header}</h4>
              <div className="flex flex-col gap-[16px]">
                {item.links.map((link, idx) =>
                  item.isHiring && link === "Careers" ? (
                    <Link
                      key={idx}
                      href="/"
                      className="text-grey gap-3 text-[20px] flex items-center"
                    >
                      {link}{" "}
                      <Button
                        text="Hiring!"
                        color="#0A2640"
                        className="bg-success text-[13px] py-1 px-[14px] md:px-5 font-sans font-normal"
                      />
                    </Link>
                  ) : (
                    <Link key={idx} href="/" className="text-grey text-[20px]">
                      {link}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h5 className="text-grey text-[16px]">All rights reserved.</h5>
    </section>
  );
}
