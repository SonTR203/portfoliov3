import ClientProjects from "@/components/sections/ClientProjects";
import Hero from "@/components/sections/Hero";
import MyProjects from "@/components/sections/MyProjects";
import MyServices from "@/components/sections/MyServices";
import Navbar from "@/components/utils/Navbar";

export default function Home() {
  return (
    <>
      <main className=" px-8 bg-neutral-900">
        <Navbar />
        <Hero />
        <MyServices />
        <ClientProjects />
        <MyProjects />
      </main>
    </>
  );
}
