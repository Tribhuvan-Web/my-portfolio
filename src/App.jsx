import About from "./components/About";
import Achievement from "./components/Achievement";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-300 min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="w-full">
        <section id="home" className="w-full">
          <Body />
        </section>

        <section id="projects" className="min-h-screen w-full">
          <Project />
        </section>

        <section id="achievement" className="min-h-screen w-full">
          <Achievement />
        </section>

        <section id="about" className="w-full">
          <About />
        </section>
        
        <section id="contact" className="w-full">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
