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
      <div className="w-full sm:px-4 lg:px-0">
        <section id="home" className="min-h-screen w-full">
          <Body />
        </section>

        <section id="projects" className="min-h-screen w-full">
          <Project />
        </section>

        <section id="achievement" className="min-h-screen w-full">
          <Achievement />
        </section>

        <section id="about" className="min-h-screen w-full">
          <About />
        </section>
        
        <section id="contact" className="min-h-screen w-full">
          <Contact />
        </section>
        
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
};

export default App;
