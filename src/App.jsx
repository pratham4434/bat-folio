import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Long from "./components/Long";
import Long2 from "./components/Long2";

function App() {
    return (
        <div className="App">
            <HeroBanner />
            {/* <Long2/> */}
            <AboutMe />
            <Long/>
            <Skills />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
