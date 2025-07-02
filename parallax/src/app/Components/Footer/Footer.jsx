import React from 'react'
import './Footer.css'

export default function Footer (){
  return (
    <footer>
      <img className='surface' src="./surface.png" alt="" />
      <div className="footer-desc">
        <h2 className="last-text">Join our community and harvest $SALT</h2>
        <div className='hints'>
          <p>How It Works</p>
          <p>Buy Salt AI</p>
        </div>
        <hr />
        <section className='last-section'>
          <div className="link-img">
          <img src="./tg-mini.png" alt="" />
          <img src="./twitter.png" alt="" />
          </div>
          <div className="policies">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
          </div>
        </section>
      </div>
    </footer>
  )
}
