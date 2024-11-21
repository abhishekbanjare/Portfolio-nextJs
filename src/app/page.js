import Header from "./header/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Project from "./project/page";
import Homepage from "./home/page";
import Footer from "./footer/page";
export default function Home() {
  return (
    <main>
      <Header />
      <Homepage />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
