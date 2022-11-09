import React from 'react'
import Hero from '../components/views/home/Hero'
import Partners from '../components/views/home/Partners'
import CnS from '../components/views/home/CnS'
import LiveAuction from '../components/views/home/LiveAuction'
import CTA from '../components/views/home/CTA'
import Featured from '../components/views/home/Featured'
import { useState, useEffect } from "react";
import Loader from "../components/Loader";



const Home = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    setTimeout(()=>{
      setLoading(false)
    }, 3000);

  }, []);

  return (
    <div>
      {loading ? <Loader loading={loading}/>
        :
        <div>
          <Hero/>
          <Partners/>
          <CnS/>
          <LiveAuction/>
          <Featured/>
          <CTA/>
        </div>
      }
    </div>
  )
}

export default Home