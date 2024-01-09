import React from 'react';
import './firstpage.css'
const FirstPage = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img className='img' src="Cat-N-Dog-Logo.png" alt="" />
        <p className='para1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='para2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="right-section">
        <img className='img2' src="assets/images/Group\ 2.png" alt="Dog" />
      </div>
    </div>
  );
};

export default FirstPage;