import React from "react";
import { Navbar } from "./nav";
import { Footer } from "./footer";

const RootLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <section className="w-full container-side-spacing text-primary pb-[52px]">
      <div className="container mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </section>
  );
};

export default RootLayout;
