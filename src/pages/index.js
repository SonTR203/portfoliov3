import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className=" px-10 bg-neutral-900">
        <Navbar />
        <Hero />
        <MyProjects />
      </main>
    </>
  );
}
