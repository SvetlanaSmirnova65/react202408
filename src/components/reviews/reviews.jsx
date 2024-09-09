  import { Review } from "../review/review";
  import { ReviewForm } from "../review-form/review-form";
    
  export const Reviews = ({ reviewsIds }) => {
    return (
      <>
        <ul>
          {reviewsIds?.map((id) => (
          <li key={id}> <Review id={id}/></li>
          ))}
        </ul>
        <ReviewForm />
      </>
    );
  };    
