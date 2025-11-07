import gsap from "gsap";
import About from "./components/About";
import Hero from "./components/Hero";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

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
        <Navbar />
        <Hero />
        <About />
        <Features />
      </div>
    </main>
  );
}

export default App;
