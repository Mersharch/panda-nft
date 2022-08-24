import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    setTimeout(()=>{
      setLoading(false)
    }, 5000);

  }, []);
  
  return (
    <div>
      {loading ? <Loader loading={loading}/>
       : 
      <div className="bg-[#02050E] h-full py-1 px-5 text-white w-full" >
        <ScrollTopBtn/>
        <Navbar/>
        <Router>
          <Routes>
            <Route  path="/" element={<Home />} />
            </Routes>
        </Router>
        <Footer/>
      </div>
      }
    </div>
  );
}

export default App;
