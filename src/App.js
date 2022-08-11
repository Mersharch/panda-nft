import { useState, useEffect } from "react";
import CnS from "./components/CnS";
import CTA from "./components/CTA";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LiveAuction from "./components/LiveAuction";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import ScrollTopBtn from "./components/ScrollTopBtn";

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
        <Hero/>
        <Partners/>
        <CnS/>
        <LiveAuction/>
        <Featured/>
        <CTA/>
        <Footer/>
      </div>
      }
    </div>
  );
}

export default App;
