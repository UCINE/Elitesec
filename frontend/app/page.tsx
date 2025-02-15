import Newsletter from "@/components/newsletter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/About";
// import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery"; // Import getCloudinaryImages function
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <Header />
      <About />
      <Gallery />
      <Contact />
      {/* <Blog /> */}
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}