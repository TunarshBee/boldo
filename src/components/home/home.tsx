import React from "react";
import Image from "next/image";
import { News } from "../news/News";
import { Enterprise } from "../enterprise/enterprise";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 mb-[40px] md:mb-[65px]">
        <p className="text-[20px] text-grey">Blog</p>
        <h3 className="text-[35px] md:text-[64px] leading-normal md:leading-[84px] font-manrope font-normal text-center">
          Thoughts and words{" "}
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-[72px]">
        <Image src="/images/blog-img.png" alt="hero" width={493} height={423} />
        <div className="max-w-[555px]">
          <div className="flex gap-3">
            <p className="text-[16px] text-primary font-semibold leading-[28px]">
              Category
            </p>
            <span className="text-[16px] text-grey leading-[28px]">
              November 22, 2021
            </span>
          </div>
          <h1 className="text-[35px] md:text-[48px] font-normal font-manrope leading-normal md:leading-[72px] mb-4">
            Pitch termsheet backing validation focus release.{" "}
          </h1>
          <div className="flex items-center gap-2">
            <Image
              src="/images/author1.png"
              alt="chandler bing"
              width={32}
              height={32}
            />
            <p className="text-[16px] leading-[28px] font-semibold">
              Chandler Bing
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t border-primary mb-14 md:mb-[95px]" />
      <News />
      <Enterprise />
    </>
  );
};

export default Home;
