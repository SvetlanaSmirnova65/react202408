import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews";
import { selectUserById } from "../../redux/entities/users";

export const Review = ({id }) => {
   const review = useSelector((state) => selectReviewById(state, id));
   const { userId, text, rating } = review || {};
 
   if (!text) {
     return null;
   }

   const user = useSelector((state) => selectUserById(state, userId));
   const { name } = user;

   return (
       <>{name}: {text}  <span style={{ color: 'red' }}>{rating}</span></>
    );
  }; 