import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className="flex flex-col bg-[#02050E] min-h-screen py-1 justify-between text-white w-full">
      <ScrollTopBtn />
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
