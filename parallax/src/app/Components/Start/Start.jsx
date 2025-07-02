'use client'
import React, { useEffect, useState } from "react"
import "./Start-Style.css"
import { useParallax } from "react-scroll-parallax"

export default function Start () {

  const parallax = useParallax({
    speed: -30,
  })
  const parallax2 = useParallax({
    speed:-40,
    translateX: [0,-5],
    scaleX: [1.03, 0.94, 'easeInQuad'],
  })
  
  const [changeColor, setChangeColor] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setChangeColor(true)
      } else {
        setChangeColor(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return(
    <div className={`start ${changeColor ? 'scrolled' : ''}`}>
      <img className="darkside" src="/darkside.png" alt="" ref={parallax.ref} />
      <div className="content" ref={parallax2.ref}>
      <h1 className={`mainH1 ${changeColor ? 'scrolled-text' : ''}`}>A new economic primitive for funding decentralized AI</h1>
        <p className="main-par">We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</p>
        <button className="buy"><span>Buy Salt AI</span></button>
      </div>
    </div>
  )
}