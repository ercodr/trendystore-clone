import About from "./components/About";
import Contact from "./components/Contact";
import Discount from "./components/Discount";
import FindMore from "./components/FindMore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='min-h-screen max-h-full bg-slate-100'>
      <Navbar />
      <Hero />
      <section className='lg:p-16'>
        <FindMore />
        <About />
        <Contact />
        <Discount />
      </section>
      <Footer />
    </div>
  );
};

export default App;
