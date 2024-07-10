
import { useState } from "react";


const useCount = () => {
    const [count,setCount] = useState(0);
    const min = 0;
    const max = 5;

    const increment = () => {
        setCount((prevState) => prevState + 1 > max ? prevState : prevState + 1);}

    const decrement = () => {
        setCount((prevState) => prevState - 1 < min ? prevState : prevState - 1);}

    return {count,increment,decrement}
    };


export const Menu=({name, price, ingredients})=>{
   const {count,increment,decrement} = useCount();
   return (
   <div>
        <h4>{name}</h4>
        <div>price: {price}</div>
        <div>Ingridients:</div>
        <ul>
            {ingredients?.length ? ingredients.map((value) =><li key={value}>{value}</li>) : <div>-</div>}
        </ul>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
        </div>
    );
}