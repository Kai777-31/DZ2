//import {useBludo} from "../components/menu";
import { useState } from 'react';

export const ReviewForm = () =>{
  //const {counter,increase,decrease} = useBludo();  
  const [counter]=useState(0);
  return (
      <form>
        <span>Name</span>
        <input />
        <span>  Text</span>
        <input />
        <span> Rating</span>
        <button>+</button>
        {counter}
        <button>-</button>
          <button>Save</button>
      </form>  
    )
};