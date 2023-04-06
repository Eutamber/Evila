import React, { useState} from 'react'
import { FaHeart } from "react-icons/fa";
import './Favor.css';

function Favor (){
    const [state, setState] = useState(false);

    const toggle=()=>{
        setState(!state);
    }
  return (
    <div>
        <button onClick={toggle} className={'Button ' + (state ? 'Button--close':'')}>
            {state ? <FaHeart className='heart-like'/> :<FaHeart  className='heart'/>}
        </button>
    </div>
  );
}

export default Favor;
