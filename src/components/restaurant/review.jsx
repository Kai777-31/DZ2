export const Review = ({user,rating,text})=> {
   return (
   <div>
        <b>{user} ({rating}): </b>{text}
    </div>
   );
}