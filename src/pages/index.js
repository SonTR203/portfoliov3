import ClientProjects from "@/components/ClientProjects";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import MyServices from "@/components/MyServices";
import Navbar from "@/components/Navbar";

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
