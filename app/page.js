import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-light dark:bg-black transition-colors duration-300">
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}

