import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <Navbar />
        <Hero />
        <MyProjects />
      </main>
    </>
  );
}
