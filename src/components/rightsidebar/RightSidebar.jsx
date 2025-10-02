import React from 'react';
import './RightSidebar.css'
import assets from '../../assets/assets.js';
import { Link } from 'react-router-dom';

const RightSidebar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <Link to='/profile'><img src={assets.profile_img} alt="" /></Link>
        <h3>Richard <img src={assets.green_dot} className='dot' alt="" /></h3>
        <p>Hey, I am using ChatApp</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
        </div>
      </div>
      <Link to='/'><button>Logout</button></Link>
    </div>
  );
}

export default RightSidebar;
