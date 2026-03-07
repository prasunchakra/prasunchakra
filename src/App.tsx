import { HeroSection } from "./components/sections/HeroSection";
import { MatrixBackground } from "./components/sections/MatrixBackground";

function App() {
    return (
        <main className="relative">
            <MatrixBackground />
            <HeroSection />
        </main>
    );
}

export default App;
