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
    <div className="bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-300 min-h-screen">
      <Navbar />
      <div>
        <section id="home" className="min-h-screen">
          <Body />
        </section>

        <section id="projects" className="min-h-screen">
          <Project />
        </section>

        <section id="achievement" className="min-h-screen">
          <Achievement />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
};

export default App;
