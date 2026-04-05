import React from 'react';
import Image from '../../../assets/Image (3).png'
import Image5 from '../../../assets/Image (5).png'
import Images from '../../../assets/Images.png'
import Images2 from '../../../assets/Image (2).png'
import './BootCamp.css'
const BootCamp = () => {
    return (
       <div className='bootCampContainer'>
        <h4>Bootcamp Program</h4>
         <div className='cardMainContainer'>
             {/* first cart1 */}
            <div className='cardContainer'>
           
            <div className="card-1 card bg-base-100 image-full shadow-sm">
  <figure>
    <img className=''
      src={Image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div>
       <h2 className="btn btn-primary">Beginner</h2> 
    </div>
    
    <p>ULTIMATE DRAWING COURSE</p>
  
  </div>
 
</div>
<div className='descriptionContainer'>
     <h3>Adobe Ilustrator OC - Advanced
Training Course </h3>
<span>Ry Oracurbbuta i Cesiai</span>
<small>Rating pending...</small>
<button className='btn btn-outline'>Start Learning</button>
</div>

        </div>
             {/* first cart2 */}
            <div className='cardContainer'>
           
            <div className="card-1 card bg-base-100 image-full  shadow-sm">
  <figure>
    <img className=''
      src={Image5}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div>
       <h2 className="btn btn-primary">Beginner</h2> 
    </div>
    
    <p>INTERMEDIATE<br /> TO  ADVANCED <br /> LEVEL</p>
  
  </div>
 
</div>
<div className='descriptionContainer'>
     <h3>Master Coursec English Grammar
Engish Speaking</h3>
<span>Hy Orecanntute H Languege</span>
<small>Rating pending...</small>
<button className='btn btn-outline'>Start Learning</button>
</div>

        </div>
             {/* first cart3 */}
            <div className='cardContainer'>
           
            <div className="card-1 card bg-base-100 image-full shadow-sm">
  <figure>
    <img className=''
      src={Images}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div>
       <h2 className="btn btn-primary">Beginner</h2> 
    </div>
    <p>LEARN WEB <br /> DEVELOPMENT <br />COURSE</p>
  </div>
 
</div>
<div className='descriptionContainer'>
     <h3>The Complete 2024 Web
Development Bootcamp</h3>
<span>By Orecartf i Ceuhoert</span>
<small>Rating pending...</small>
<button className='btn btn-outline'>Start Learning</button>
</div>

        </div>
             {/* first cart4 */}
            <div className='cardContainer'>
           
            <div className="card-1 card bg-base-100 image-full shadow-sm">
  <figure>
    <img className=''
      src={Images2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div>
       <h2 className="btn btn-primary">Beginner</h2> 
    </div>
    <p>THE CORPORATE <br />FINANCE <br />COURSE</p>
  </div>
 
</div>
<div className='descriptionContainer'>
     <h3>The Complete Personal Finance Course </h3>
<span>ty Cracalllato i Franie</span>
<small>Rating pending...</small>
<button className='btn btn-outline'>Start Learning</button>
</div>

        </div>
        </div>
       </div>
    );
};

export default BootCamp;