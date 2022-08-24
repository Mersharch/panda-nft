import React from 'react'
import CnS from "../components/CnS";
import CTA from "../components/CTA";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import LiveAuction from "../components/LiveAuction";
import Partners from "../components/Partners";


const Home = () => {
  return (
    <div>
        <Hero/>
        <Partners/>
        <CnS/>
        <LiveAuction/>
        <Featured/>
        <CTA/>
    </div>
  )
}

export default Home