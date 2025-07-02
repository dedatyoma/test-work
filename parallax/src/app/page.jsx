"use client"
import "./pagestyles.css"
import React, { useState, useEffect } from 'react'
import Start from '@/app/Components/Start/Start'
import Sponsores from "./Components/Sponsors/Sponsors"
import Community from "./Components/Community/Community"
import Footer from './Components/Footer/Footer'
import { ParallaxProvider, useParallax } from "react-scroll-parallax"


export default function page () {
  const [showIndicators, setShowIndicators] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setShowIndicators(true)
      } else {
        setShowIndicators(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const indicators = [
    {
      value:"1873",
      label:"LLM models"
    },
    {
      value:"$326,734",
      label:"Paid to data scientists"
    },
    {
      value:"6,557",
      label:"Developers"
    }
  ]
  return (
    <ParallaxProvider>
      <div className="main">
        <img className="blue-void" src="./Vector6.png" alt="" />
        <header>
          <p>How It Works</p>
          <button className="header-buy"><span>Buy Salt AI</span></button>
        </header>
          <Start/>
        <div className={`indicators ${showIndicators ? 'visible' : ''}`}>
          {indicators.map((item, idx) => {
            return (
              <div className="indicator-box" key={idx}>
                <span className="indicator-value">{item.value}</span>
                <span className="indicator-label">{item.label}</span>
              </div>
            )
            })}
        </div>
        
        <Sponsores/>
        <Community/>
        <Footer/>
      </div>
    </ParallaxProvider>
  )
}
