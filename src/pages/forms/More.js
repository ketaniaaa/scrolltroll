import React from 'react';
import Rickroll from '../../images/formimages/rickroll.mp4';


export default function More() {
  return (
    <main className='moreMain'>
        <h1 className='moreTitle'>403 FORBIDDEN</h1>
        <p className='moreP'> You are not supposed be here but since you are here please enjoy:
        </p>

        <video src={Rickroll} autoPlay className='ricked'></video>
          
        {/* <HashLink className="back" to='/Country#top'> Back</HashLink> */}
    </main>
  )
}
