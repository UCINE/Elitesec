import { NavBar } from "@/components/ui/nav-bar"
import Newsletter from "@/components/newsletter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/About";
// import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery"; // Import getCloudinaryImages function
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Header />
      <About />
      <Timeline />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}