'use client'
import React from 'react'
import './Sponsors.css'
import { useParallax } from 'react-scroll-parallax'

export default function Sponsores () {
  
  const solanaParallax = useParallax({
    translateX: [-120, 50], 
    easing: "easeInOut",
  });

  const arweaveParallax = useParallax({
    translateX: [-120, 50], 
    easing: "easeInOut",
  });

  const bittensorParallax = useParallax({
    translateX: [-120, 50], 
    easing: "easeInOut",
  });

  const redRoundParallax = useParallax({
    translateX: [-100, 80],  
    easing: "easeInOut",
  });

  const telegramParallax = useParallax({
    translateX: [-100, 90], 
    easing: "easeInOut",
  });

  return (
    <div className='sponsores'>
      <h2>Projects integrated into the Arrakis AI Ecosystem</h2>
      <div className="socials">
        <img src="./solana.png" alt="Solana" ref={solanaParallax.ref} />
        <img src="./arweave.png" alt="Arweave" ref={arweaveParallax.ref} />
        <img src="./bittensor.png" alt="Bittensor" ref={bittensorParallax.ref} />
        <img className='social-round-img' src="./red-round.png" alt="Red Round" ref={redRoundParallax.ref} />
        <img className='social-round-img' src="./telegram.png" alt="Telegram" ref={telegramParallax.ref} />
      </div>
    </div>
  )
}
