import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <Navbar />
        <Hero />
        <section className="h-screen">
          <div>
            <h3 className="text-3xl py-1">My projects</h3>
            <p></p>
          </div>
        </section>
      </main>
    </>
  );
}
