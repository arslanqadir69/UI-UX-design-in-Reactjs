import React from 'react';
import './brand.css';
import {slack,shopify,google,dropbox,atlassian} from './imports.js'
const Brand = () => {
  return (< div className='gpt3-brand'>
    <div>
      <img src={google}/>
    </div>
    <div>
      <img src={slack}/>
    </div>
    <div>
      <img src={shopify}/>
    </div>
    <div>
      <img src={dropbox}/>
    </div>
    <div>
      <img src={atlassian}/>
    </div>
  </div>);
};

export default Brand;