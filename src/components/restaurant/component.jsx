import { Menu } from "../menu/component";
import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";

export const Restaurant = ({ name, menu, reviews }) => {
   return (
   <div>
      <h2>Restaurant: <span id="rest">{name}</span></h2>
      <h3>MENU</h3>
        {menu?.length ?  menu.map(({id,name,price,ingredients})=> <Menu key={id} name={name} price={price} ingredients={ingredients}/>) : <div>-</div>}
      <h3>REVIEWS</h3>
        {reviews?.length ?  reviews.map(({id,user,rating,text}) => <Review key={id} user = {user} rating = {rating} text={text}/>) : <div>-</div>}
        <br/>
        <br/>
        <br/>
        <ReviewForm />
   </div>
   );
};