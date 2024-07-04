//import { headphones } from "../../constants/mock";
//import { Headphone } from "../restaurant/component";
import { Layout } from "../layout/component";
import {restaurants} from "../materials/mock.js";
import { Restaurant } from "../restaurant/restaurant.jsx"

export const App= ()=> {
    return (
        <Layout>
            {restaurants.map(({id,name, menu,reviews}) =>  <Restaurant key={id} name = {name} menu={menu} reviews = {reviews} />)}
     </Layout>
   );
}