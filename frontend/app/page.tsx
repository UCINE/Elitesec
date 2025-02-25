import { NavBar } from "@/components/ui/nav-bar"
import Newsletter from "@/components/newsletter";
import Blog from "@/components/Blog";
import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Header />
      <About />
      <Timeline />
      <Blog />
      {/* <Gallery /> */}
      <Sponsors />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}