import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "@/src/components";
import { NewsData } from "@/src/constants";

function NewsCard({
  latestNews: { img, title, date, author, authorImg },
}: {
  latestNews: {
    img: StaticImageData;
    title: string;
    date: string;
    author: string;
    authorImg: StaticImageData;
  };
}) {
  return (
    <div className="flex flex-col justify-between gap-[20px]">
      <div>
        <Image
          src={img}
          alt={title}
          width={300}
          height={209}
          className="w-full mb-6"
        />
        <div className="flex gap-[12px] mb-[12px]">
          <h4 className="text-primary text-[16px] font-bold">Category</h4>
          <p className="text-grey text-[16px]">{date}</p>
        </div>
        <p className="text-black text-[20px]">{title}</p>
      </div>

      <div className="flex items-center gap-[12px]">
        <Image src={authorImg} alt={author} width={32} height={32} />
        <p className="text-[16px]">{author}</p>
      </div>
    </div>
  );
}

export function News() {
  return (
    <section className="w-full container-px pb-[124px]">
      <div className="container-w mx-auto flex flex-col items-center gap-[40px]">
        <h3 className="max-w-[842px] self-start text-[35px] md:text-[48px] leading-normal md:leading-[72px] font-manrope font-normal">
          Latest News
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {NewsData.map((news, index) => (
            <NewsCard key={index} latestNews={news} />
          ))}
        </div>
        <Button
          bgColor="transparent"
          color="#000"
          text="Load more"
          className="border-primary border-2"
        />
      </div>
    </section>
  );
}
