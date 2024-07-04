import { useState } from "react";

const useBludo = () => {
    const max = 5;
    const min = 0;
    const [counter,setCount] = useState(0);

    const increase = () => {
        setCount((prevState)=>prevState+1 > max ? prevState : prevState+1);
      }
    const decrease = () => {
        setCount((prevState)=>prevState-1 < min ? prevState : prevState-1);
      }
    return {counter,increase,decrease}
    };


export const Menu=({name, price, ingredients})=>{
   const {counter,increase,decrease} = useBludo();
   return (
   <div>
        <h4>{name}</h4>
        <div>price: {price}</div>
        <div>Ingridients:</div>
        <ul>
            {ingredients?.length ? ingredients.map((value) =><li key={value}>{value}</li>) : <div>-</div>}
        </ul>
        <button onClick={increase}>+</button>
        {counter}
        <button onClick={decrease}>-</button>
        </div>
    );
}