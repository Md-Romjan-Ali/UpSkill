import React from 'react';
import './Footer.css'

import { FaFacebookF, FaInstagramSquare, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='footerMainContainer'>
            <h1>www.DownloadNewThemes.com</h1>
            <footer className="footerContainer  bg-base-200 text-base-content ">
                <nav>
<strong>Upskill.</strong>
<div className='whatsapp'>
   <FaWhatsapp className='text-5xl text-orange-400'></FaWhatsapp>
    <div>
        <h3>WhatsApp</h3>
        <h3>01925462512</h3>
    </div>
</div>
<div className='whatsapp'>
    <MdOutlineMailOutline className='text-5xl text-orange-400'/>
    <div>
        <h3>Email</h3>
        <h3>some@gamil.com</h3>
    </div>
</div>
                </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">What Wo Offer</a>
    <a className="link link-hover">Our Course</a>
    <a className="link link-hover">Caroers</a>
  </nav>
  <nav>
    <h6 className="footer-title">Teaching</h6>
    <a className="link link-hover">Beoome a Teacher</a>
    <a className="link link-hover">Teacher Halp Contar</a>
    <a className="link link-hover">Rules 6 Roquinements</a>
    <a className="link link-hover">Leadership</a>
  </nav>
  <nav>
    <h6 className="footer-title">Community</h6>
    <a className="link link-hover">Partoers</a>
    <a className="link link-hover">Blog G News</a>
    <a className="link link-hover">Toam Plans</a>
  </nav>
  <nav>
<h6 className="footer-title">Connect with us</h6>
{/* icon */}
<div className='footerIcon'>
  <a href=""><FaFacebookF size={25}/></a>
<a href=""><FaTwitter size={25}/></a>
<a href=""><FaYoutube size={25}/></a>
<a href=""><FaInstagramSquare size={25}/></a>


</div>
  </nav>
</footer>
<hr />
<div className='footerCopy'>
<div className=''>
  <a href="">Privacy Practioes</a>
<a href="">Disclaimer</a>
<a href="">Apoessiblity</a>
<a href="">Terms of Use</a>
<a href="">Soemap</a>
</div>
<h5>Copyright  2024 Upskil  Powesed by Onecontibutor</h5>
</div>
        </div>
    );
};

export default Footer;