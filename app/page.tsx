// import { Home as Hero } from "@/src/components";
import RootLayout from "@/src/layout/rootLayout";
import "material-icons/iconfont/material-icons.css";
import { lazy, Suspense } from "react";

const Hero = lazy(()=> import('../src/components/home/home'))

export default function Home() {
  return (
    <RootLayout>
      <Suspense fallback={<div className="w-full flex items-center justify-center text-center text-primary">Loading...</div>}>
        <Hero />
      </Suspense>
    </RootLayout>
  );
}
