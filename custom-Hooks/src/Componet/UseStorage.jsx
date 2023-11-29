import React, { useEffect, useState } from 'react'

const useStorage = (key,initialvalue) => {
    const getStoredValue =(storageType)=>{
        const storedvalue=window[storageType].getItem(key);
        return storedvalue ? JSON.parse(storedvalue) : initialvalue;
    }

    const [value,setValue]=useState(()=>getStoredValue("localStorage"));


    useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(value));
        window.sessionStorage.setItem(key,JSON.stringify(value));

    },[key,value]);

    const handleChange=(newValue)=>{
        setValue(newValue);

    }

  return [value,handleChange];
}

export default useStorage
