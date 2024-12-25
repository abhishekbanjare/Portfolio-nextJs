import Header from "./header/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Project from "./project/page";
import Homepage from "./home/page";
import Footer from "./footer/page";
import Gallery from "@/components/gallery/Gallery";
export default function Home() {
  return (
    <main>
      <Homepage />
      <About />
      <Skills />
      <Project />
      <Gallery/>
      <Contact />
    </main>
  );
}
