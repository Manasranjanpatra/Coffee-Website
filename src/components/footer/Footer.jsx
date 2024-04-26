import React from 'react';
import logo from '../../assets/logo.png';

import {  FaRegEnvelope, FaCaretRight,  FaFacebookF, FaTwitter, FaLinkedinIn,  FaYoutube, } from "react-icons/fa";

import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import './footer.css'  




const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__grid container grid">
      <div className="footer__content">
        <a href="/" className="footer__logo">
          <img src={logo} alt="" className="footer__logo-img" />
        </a>
        <p className="footer__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium tempore quaerat placeat, qui totam.

        </p>

<ul className="footer__contact">
  <li className="footer__contact-item">
    <AiOutlinePhone className="icon"/> +92 1234567832
  </li>


  <li className="footer__contact-item">
    <MdOutlineLocationOn className="icon"/> 25/B Milford Road, New York
  </li>
  <li className="footer__contact-item">
    <FaRegEnvelope className="icon"/> info@example.com
  </li>

</ul>

      </div>

<div className="footer--content">
  <h3 className="footer__title">Quik Links</h3>

  <ul className="footer__link">
    <li>
      <a href="#about" className="footer__link">
        <FaCaretRight className = 'icon'/> About Us
      </a>
    </li>
<li>
  <a href="#menu" className="footer__link">
    <FaCaretRight className = 'icon' /> Menu
  </a>
  </li>

  <li>
  <a href="#features" className="footer__link">
    <FaCaretRight className = 'icon' /> Features
  </a>
  </li>

  <li>
  <a href="#gallery" className="footer__link">
    <FaCaretRight className = 'icon' /> Gallery
  </a>
  </li>

  <li>
  <a href="#reservation" className="footer__link">
    <FaCaretRight className = 'icon' /> Reservation
  </a>
  </li>

  </ul>
</div>

<div className="footer__content">
  <h3 className="footer__title">Opening Hours</h3>
<div className="footer__opening-hour">
<ul className="opening__hour-list">
  <li className="opening__hour-item">
    <span>Saturday:</span>
    <span>09AM - 06PM</span>
  </li>

  <li className="opening__hour-items">
    <span>Monday:</span>
    <span>09AM - 06AM</span>
  </li>

  <li className="opening__hour-item">
    <span>Tuesday:</span>
      <span>09AM - 06PM</span>
  </li>
  <li className="opening__hour-item">
    <span>Wednesday:</span>
      <span>09AM - 06PM</span>
  </li>

  <li className="opening__hour-item">
    <span>Thursday:</span>
      <span>09AM - 06PM</span>
  </li>

  <li className="opening__hour-item">
    <span>Friday:</span>
      <span>09AM - 06PM</span>
  </li>

  <li className="opening__hour-item">
    <span>Saturday:</span>
      <span>09AM - 06PM</span>
  </li>
  <li className="opening__hour-item">
    <span>Sunday:</span>
      <span>Closed</span>
  </li>
</ul>

</div>

</div>

<div className="footer__content">
  <h3 className="footer__title">Newletter</h3>
  <p className="footer__description">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, ipsa!

  </p>
<form action="" className="subscribe__form">
  <input type="text" placeholder='Your Email' className="form__input subscribe__input" />

<button className="btn btn--flex subscribe__btn">
<FaRegEnvelope/> Subscribe Now

</button>

</form>



<div className="footer__socials">

  <h3 className="footer__social-follow"> Follow Us:
</h3>
<div className="footer__social-links">
  <a href="/" className="footer__social-link">
    <FaFacebookF />
  </a>

  <a href="/" className="footer__social-link">
    <FaTwitter/>
  </a>

  <a href="/" className="footer__social-link">
    <FaLinkedinIn />
  </a>


<a href="/" className="footer__social-link">
<FaYoutube />
</a>

</div>
</div>

</div>


    </div>
<p className="copyright__text">
  &copy; Copyright 2023 <span>Coffero</span> All Right Reserved.
</p>

   </footer>
  )
}

export default Footer
