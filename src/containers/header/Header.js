import React from 'react';
import './header.css';
import peoples from '../../images/Group 81.png';
import ai from '../../images/ai.png';
const Header = () => {
  return (
    <div className='gpt3-header section__margin'>
     <div className='gpt3-header-content'>
      <h1 className='gradient__text'>Let’s Build Something amazing with GPT-OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className='gpt3-header-content-input'>
       <input type="email"  placeholder="Enter your Email"/>
       <button type='button'>Get Start</button>
      </div>
      <div className='gpt3-header-content-peoples'>
          <img src={peoples} alt='people'/>
          <p>1,600 peple requested access a visit in last 24 hours</p>
      </div>
      
     </div>
     <div className='gpt3-header-image'>
          <img src={ai} alt="ai"/>
      </div>
    </div>
  );
};

export default Header;
