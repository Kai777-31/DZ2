import { Menu } from "./menu"
import { Review } from "./review.jsx"


export const Restaurant = ({ name, menu, reviews }) => {
   return (
   <div>
      <h2>Restaurant: <i>{name}</i></h2>
      <h3>MENU</h3>
        {menu?.length ?  menu.map(({id,name,price,ingredients})=> <Menu key={id} name={name} price={price} ingredients={ingredients}/>) : <div>-</div>}
      <h3>REVIEWS</h3>
        {reviews?.length ?  reviews.map(({id,user,rating,text}) => <Review key={id} user = {user} rating = {rating} text={text}/>) : <div>-</div>}
      <hr></hr>
   </div>
   );
};