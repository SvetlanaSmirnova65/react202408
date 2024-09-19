import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews";
import { ReviewUser } from "../review-user/review-user";

import styles from "./review.module.css";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
   const { userId, text, rating } = review || {};
 
   if (!text) {
     return null;
   }

   return (
       <><ReviewUser id={userId} text={text}/> <span className={styles.label}>{rating}</span></>
    );
  }; 