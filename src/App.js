import CnS from "./components/CnS";
import CTA from "./components/CTA";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LiveAuction from "./components/LiveAuction";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import ScrollTopBtn from "./components/ScrollTopBtn";

function App() {
  return (
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
  );
}

export default App;
