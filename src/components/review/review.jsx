import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews";
import { selectUserById } from "../../redux/entities/users";

export const Review = ({id }) => {
   const review = useSelector((state) => selectReviewById(state, id));
   const { userId, text, rating } = review || {};
 
   const user = useSelector((state) => selectUserById(state, userId));
   const { name } = user;

   if (!text) {
     return null;
   }

   return (
       <>{name}: {text}  <span style={{ color: 'red' }}>{rating}</span></>
    );
  }; 