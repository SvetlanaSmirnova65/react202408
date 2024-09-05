  import { Review } from "../review/review";
  import { ReviewForm } from "../review-form/review-form";
    
    export const Reviews = ({ reviews }) => {
      return (
        <>
          <ul>
            {reviews?.map((review) => (
            <li key={review.id}> <Review user={review.user} text={review.text} rating={review.rating}/></li>
            ))}
          </ul>
          <ReviewForm />
        </>
      );
    };
    