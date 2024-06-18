import "./styles/App.css";
import "@mantine/core/styles.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <h1>MBKBOOK</h1>
      <Footer className="footer" />
    </>
  );
}

export default App;
