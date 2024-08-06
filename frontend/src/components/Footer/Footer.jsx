import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>QuickCrave</h1>
            <p>QuickCrave is your ultimate food delivery service, offering a wide selection of delicious dishes from your favorite local restaurants. Whether you're in the mood for a hearty meal, a quick snack, or a gourmet experience, we've got you covered. Choose your dish, place your order, and enjoy fresh, hot meals delivered straight to your doorstep in no time. With QuickCrave, convenience and quality are just a click away.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@quickcrave.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © QuickCrave.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
