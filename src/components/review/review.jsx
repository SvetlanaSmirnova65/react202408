import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews";
import { ReviewUser } from "../review-user/review-user";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
   const { userId, text, rating } = review || {};
 
   if (!text) {
     return null;
   }

   return (
       <><ReviewUser id={userId} text={text}/> <span style={{ color: 'red' }}>{rating}</span></>
    );
  }; 