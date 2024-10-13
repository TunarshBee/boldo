import Image from "next/image";
import Link from "next/link";
import React from "react";

const Links = [
  {
    header: "Landings",
    links: ["Home", "Products", "Services"],
  },
  {
    header: "Company",
    links: ["Home", "Careers", "Services"],
  },
  {
    header: "Resources",
    links: ["Blog", "Products", "Services"],
  },
];
export function Footer() {
  return (
    <section className="w-full container-px mb-[84px]">
      <div className="container-w mx-auto py-[100px] grid grid-cols-1 md:grid-cols-[5fr_7fr]">
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
          <h5 className="text-grey text-[16px]">All rights reserved.</h5>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[150px]">
          {Links.map((item, index) => (
            <div key={index}>
              <h4 className="text-[20px] font-bold mb-[32px]">{item.header}</h4>
              <div className="flex flex-col gap-[16px]">
                {item.links.map((link, idx) => (
                  <Link key={idx} href="/" className="text-grey text-[20px]">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
