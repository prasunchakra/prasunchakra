import {
    Navigation,
    Hero,
    About,
    Expertise,
    Research,
    Contact,
    Footer,
} from "./components/sections";

function App() {
    return (
        <main className="relative min-h-screen">
            <Navigation />
            <Hero />
            <About />
            <Expertise />
            <Research />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
