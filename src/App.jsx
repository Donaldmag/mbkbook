import "./styles/App.css";
import "@mantine/core/styles.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

function App() {
  return (
    <>
      <Header className="header"/>
      <HeroSection/> 
      <Footer className="footer" />
    </>
  );
}

export default App;
