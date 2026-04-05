import React from 'react';
 import heroImga from '../../../assets/adimg.png'
 import right from '../../../assets/Image (4).png'
 import './Advantages.css'
const Advantages = () => {
   
    return (
       <div className="hero bg-base-200 py-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
     <img
      src={heroImga}
      className="rounded-lg "
    />
   </div>
    <div className='flex-1 '>
      <h1 className='adheaderText'>The Advantages of the
upskill Program.</h1>
    <div className='heroMainContainer'>
        <div className="addiv">
        <img src={right} alt="" />
        <div className="div2">
          <h1>Relevant Skill set</h1>
          <p>Lorem ipsum dolor sit amet
consectonur adpiscing olt</p>
        </div>
      </div>
      <div className="addiv">
        <img src={right} alt="" />
        <div className="div2">
          <h1>1-on-1 Mentoring</h1>
          <p>Lorom ipsum doior sit amet
consectetur adipiscing elt</p>
        </div>
      </div>
      <div className="addiv">
        <img src={right} alt="" />
        <div className="div2">
          <h1>Growth Mindset</h1>
          <p>Lorom ipsum doior sit amet
consectetur adipiscing elt</p>
        </div>
      </div>
      <div className="addiv">
        <img src={right} alt="" />
        <div className="div2">
          <h1>Hiring Partners</h1>
          <p>Lorom ipsum doior sit amet
consectetur adipiscing elt</p>
        </div>
      </div>
    </div>
   
    </div>
  </div>
</div>
    );
};

export default Advantages;