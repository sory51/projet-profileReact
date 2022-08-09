import React from 'react';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import './style/index.css';

const App = () => {
  return (
    <div className='row cont'>
      <div className="">
      <ProfilePhoto/>

      </div>
      <div className=" cont-1">
      <FullName/>
     <Address/>

      </div>
   
     
    </div>
  );
};

export default App;
