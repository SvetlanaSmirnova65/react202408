export const Reviews = ({ reviews }) => {
    return (
      <ul>
        {reviews?.map((reviewItem) => (
          <li key={reviewItem.id}>{reviewItem.text}</li>
        ))}
      </ul>
    );
  };