import { Layout } from "../layout/component";
import { restaurants } from "../materials/mock";
import { Restaurant } from "../restaurant/component";
import { useState } from "react";

const tabSwitcher = () => {
    const [tabNumber,setCount] = useState(0);

    const setNew = (event) => {
        setCount(Number(event.target.id)-1);
    }

    return {tabNumber,setNew}
    };


    
    export const App= ()=> {
        const {tabNumber,setNew} = tabSwitcher();
        var num = 0;
        return (
            <Layout>
             <div>
                {restaurants.map(({name})=> { 
                    num++;
                    return ( <button className= "tabButton" id = {num} onClick={setNew}>{name}</button>); 
                    })}
                <div id="content">
                    <Restaurant name = {restaurants[tabNumber].name} menu={restaurants[tabNumber].menu} reviews = {restaurants[tabNumber].reviews} />
                </div>
            </div>
     </Layout>
   );
}