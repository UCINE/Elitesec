import { NavBar } from "@/components/ui/nav-bar";
// import Footer from "@/components/Footer";
import Header from "@/components/header";
import About from "@/components/About";
import dynamic from "next/dynamic";
import FAQ from "@/components/FAQ";

const SectionSkeleton = () => (
  <div
    className="h-96 rounded-2xl border border-zinc-800 bg-zinc-900/50 animate-pulse"
    aria-hidden="true"
  />
);

const showFaq = "false";
const showKeyRing ="false";

// Import components lazily to improve initial load performance
// const Newsletter = dynamic(() => import("@/components/sections/Newsletter"), {
//   loading: () => <SectionSkeleton />
// });

const Blog = dynamic(() => import("@/components/Blog"), {
  loading: () => <SectionSkeleton />
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton />
});

const KeyRingValidation = dynamic(
  () => import("@/components/KeyRingValidation"),
  {
    loading: () => <SectionSkeleton />,
    ssr: false,
  }
);

const Team = dynamic(() => import("@/components/Team"), {
  loading: () => <SectionSkeleton />
});

const Timeline = dynamic(() => import("@/components/Timeline"), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

const Sponsors = dynamic(() => import("@/components/Sponsors"), {
  loading: () => <SectionSkeleton />
});

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Header />
        <About />
        <Timeline />
        <Blog />
        <Sponsors />
        <Team />
        <Contact />
        {/* <Newsletter /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}