import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews-by-restaurant-id";
import { getUsers } from "../../redux/entities/users/get-users";
import { useRequest } from "../../redux/hooks/use-request";
import { Review } from "../review/review";
import { ReviewForm } from "../review-form/review-form";
  
  export const Reviews = ({ reviewsIds, restaurantId }) => {
    const usersRequestStatus = useRequest(getUsers);
    const reviewsRequestStatus = useRequest(
      getReviewsByRestaurantId,
      restaurantId,
      reviewsIds.length
    );
  
    const isUsersLoading = usersRequestStatus === "pending";
    const isReviewsLoading = reviewsRequestStatus === "pending";
    const isLoading = isUsersLoading || isReviewsLoading;
  
    const isError =
      usersRequestStatus === "rejected" || reviewsRequestStatus === "rejected";
  
    if (isLoading) {
      return <div>Отзывы загружаются...</div>;
    }
  
    if (isError) {
      return <div>Ошибка при загрузке отзываов!</div>;
    }
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
