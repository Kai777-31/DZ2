export const Review = ({user,rating,text})=> 
    {
    return (
    <div>
        <ul>
         <b>{user} ({rating}): </b>{text}
         </ul>           
     </div>
            );   
    }   