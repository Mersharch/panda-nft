import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Discover from "./pages/Discover";

function App() {

  
  return (
      
        
      <div className="bg-[#02050E] h-full py-1 text-white w-full" >
        <ScrollTopBtn/>
        <Navbar/>
        <Router>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/discover" element={<Discover />} />
            </Routes>
        </Router>
        <Footer/>
      </div>
      
  );
}

export default App;
