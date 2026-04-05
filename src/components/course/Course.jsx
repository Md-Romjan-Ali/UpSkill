import React, { useEffect } from 'react';
import './Course.css'
import Business from '../../../assets/logo/Image (7).png'
import developer from '../../../assets/logo/Image (6).png'
import Language from '../../../assets/logo/Image (5).png'
import Marketing from '../../../assets/logo/Image (4).png'
import Finance from '../../../assets/logo/Image (3).png'
import Desigo from '../../../assets/logo/Image (2).png'
import Photography from '../../../assets/logo/Image (1).png'
import Office from '../../../assets/logo/Image.png'
import Science from '../../../assets/logo/scinces.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Course = () => {
     useEffect(() => {
        Aos.init({
            duration: 1000, // animation speed
        });
    }, []);
    return (
        <div className='courseContainer'>
            
                
            <div data-aos="fade-up-right" data-aos-delay="100" className="div">
                <img className='' src={Business} alt="" />
                <p>Business</p>
            </div>
            <div data-aos="fade-up-right" data-aos-delay="200" className="div">
                <img src={developer} alt="" />
                <p>Developer</p>
            </div>
            <div data-aos="fade-up-right" data-aos-delay="300" className="div">
                <img src={Language} alt="" />
                <p>Language</p>
            </div>
            <div data-aos="fade-up-right" data-aos-delay="400" className="div">
                <img src={Marketing} alt="" />
                <p>Marketing</p>
            </div>
            <div data-aos="fade-up-right" data-aos-delay="500" className="div">
                <img src={Finance} alt="" />
                <p>Finance</p>
            </div>
            <div data-aos="fade-up-right" data-aos-delay="600" className="div">
                <img src={Desigo} alt="" />
                <p>Desigo</p>
            </div>
            <div data-aos="fade-up-right" data-aos-delay="700" className="div">
                <img src={Office} alt="" />
                <p>Photography</p>
            </div>
            <div data-aos="fade-up-right" data-aos-delay="800" className="div">
                <img src={Photography} alt="" />
                <p>Office</p>
            </div>
            <div data-aos="fade-up-right" data-aos-delay="900" className="div">
                <img src={Science} alt="" />
                <p>Science</p>
            </div>
        </div>
    );
};

export default Course;