import React from 'react'
import './Community.css'

export default function Community () {
  return (
    <div className='community'>
     <div className='community-text'>
      <h2>Join our community</h2>
      <p>Join us on our mission to to the moon & revolutionize open source AI development so that we can build a permissionless, democratized, and decentralized AI. 
      </p>
      <p>Let the fate of AI be in our hands and not that of big tech companies</p>
      <div className='comm-img'>
        <img src="./tg-mini.png" alt="" />
        <img src="./twitter.png" alt="" />
      </div>
     </div>
     <img className='moon-img' src="./moon.png" alt="" />
    </div>
  )
}
