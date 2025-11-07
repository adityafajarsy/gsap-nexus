import gsap from "gsap";
import About from "./components/About";
import Hero from "./components/Hero";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 2,
  //     effects: true,
  //   });
  // });

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <div>
        <Hero />
        <About />
        <section className="z-0 min-h-screen bg-blue-500"></section>
      </div>
    </main>
  );
}

export default App;
