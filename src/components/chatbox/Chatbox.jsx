import React from 'react';
import './Chatbox.css'
import assets from '../../assets/assets.js'

const Chatbox = () => {
  return (
    <div className='chatbox'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Richard <img src={assets.green_dot} className='dot' alt="" /></p>
        <img src={assets.help_icon} alt="Help" className='help' />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:32 PM</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:34 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file" id='image' accept='image/png image/jpeg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
}

export default Chatbox;
