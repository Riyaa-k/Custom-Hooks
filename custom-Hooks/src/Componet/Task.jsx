import React, { useState } from 'react'
import useStorage from './UseStorage';

function Task() {
    const [storedvalue,setstorevalue]=useStorage("exampleKey", "");

    const handleInput=(e)=>{
        const newValue=e.target.value;
        setstorevalue(newValue);
    }

  return (
    <div>
      <input type="text" value={storedvalue} onChange={handleInput}/>
      <p>Stored value:{storedvalue}</p>
    </div>
  )
}

export default Task
