import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews-by-restaurant-id";
import { getUsers } from "../../redux/entities/users/get-users";
import { useRequest } from "../../redux/hooks/use-request";
import { Review } from "../review/review";
import { ReviewForm } from "../review-form/review-form";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addReviewByRestaurantId } from "../../redux/entities/reviews/add-review-by-restaurant-id";
import { useAuth } from "../auth-context/use-auth";
  
  export const Reviews = ({ reviewsIds, restaurantId }) => {
    const { auth } = useAuth();
    const usersRequestStatus = useRequest(getUsers);
    const reviewsRequestStatus = useRequest(
      getReviewsByRestaurantId,
      restaurantId,
      reviewsIds.length
      );

    const dispatch = useDispatch();
    const onSave = useCallback(
      ({ text, rating }) => {
        const review = { text, rating, userId: auth.id };
  
        dispatch(addReviewByRestaurantId({ review, restaurantId }));
      },
      [auth.id, dispatch, restaurantId]
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
        <ReviewForm onSave={onSave}/>
      </>
    );
  };    
