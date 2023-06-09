import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function EntryBackButton() 

{
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  return <button onClick={goBack} className="backButton">Back</button>
}