import { NavBar } from "@/components/ui/nav-bar"
// import Footer from "@/components/Footer";
import Header from "@/components/header";
import About from "@/components/About";
import dynamic from "next/dynamic";

// Import components lazily to improve initial load performance
// const Newsletter = dynamic(() => import("@/components/sections/Newsletter"), {
//   loading: () => <div className="h-96 bg-zinc-900/50 animate-pulse"></div>
// });

const Blog = dynamic(() => import("@/components/Blog"), {
  loading: () => <div className="h-96 bg-zinc-900/50 animate-pulse"></div>
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-96 bg-zinc-900/50 animate-pulse"></div>
});

const Team = dynamic(() => import("@/components/Team"), {
  loading: () => <div className="h-96 bg-zinc-900/50 animate-pulse"></div>
});

const Timeline = dynamic(() => import("@/components/Timeline"), {
  loading: () => <div className="h-96 bg-zinc-900/50 animate-pulse"></div>
});

const Sponsors = dynamic(() => import("@/components/Sponsors"), {
  loading: () => <div className="h-96 bg-zinc-900/50 animate-pulse"></div>
});

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Header />
      <About />
      <Timeline />
      <Blog />
      <Sponsors />
      <Team />
      <Contact />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </div>
  );
}