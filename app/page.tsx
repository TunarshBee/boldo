import { News, Enterprise, Home as Hero } from "@/src/components";
import RootLayout from "@/src/layout/rootLayout";
import "material-icons/iconfont/material-icons.css";

export default function Home() {
  return (
    <RootLayout>
      <>
        <Hero />
        <News />
        <Enterprise />
      </>
    </RootLayout>
  );
}
