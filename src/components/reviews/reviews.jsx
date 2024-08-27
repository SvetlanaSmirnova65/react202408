export const Reviews = ({ reviews }) => {
    return (
      <ul>
        {reviews?.map((reviewItem) => (
          <li>{reviewItem.text}</li>
        ))}
      </ul>
    );
  };