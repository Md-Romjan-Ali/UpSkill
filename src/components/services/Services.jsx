import React from 'react';
import cv from '../../../assets/cv.png'
import interview from '../../../assets/interview.png'
import body from '../../../assets/body.png'
import career from '../../../assets/career.png'
import './Services.css'
const Services = () => {
    return (
      <div className='serviceMainContainer'>
        {/* mainContainer */}
        <h1>Services</h1>
        {/* card main container */}
          <div className='servicesMainCardContainer'>
            {/* card-1 */}
            <div className="servicesCardContainer card">
  <figure>
    <img
      src={cv}
      alt="services" />
  </figure>
  <div className="card-body">
    <h2 className="">
      CV & Resume Prep
    </h2>
    <p>Lorem ipsum dolor sit amet
consectetur adipiscing elt</p>
    
  </div>
</div>
            {/* card-2 */}
            <div className="servicesCardContainer card bg-base-100 shadow-sm">
  <figure>
    <img
      src={interview}
      alt="services" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Interview Coaching
    </h2>
    <p>Lorem ipsum dolor sit amet
consectetur adipiscing elt</p>
    
  </div>
</div>
            {/* card-3 */}
            <div className="servicesCardContainer card bg-base-100 shadow-sm">
  <figure>
    <img
      src={body}
      alt="services" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Buddy System
    </h2>
    <p>Lorem ipsum dolor sit amet
consectetur adipiscing elt</p>
    
  </div>
</div>
            {/* card-4 */}
            <div className="servicesCardContainer card bg-base-100 shadow-sm">
  <figure>
    <img
      src={career}
      alt="services" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Career Opportunity
    </h2>
    <p>Lorem ipsum dolor sit amet
consectetur adipiscing elt</p>
    
  </div>
</div>
        </div>
      </div>
    );
};

export default Services;