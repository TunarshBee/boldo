import { News, Enterprise, Home as Hero } from "@/src/components";
import RootLayout from "@/src/layout/rootLayout";

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
