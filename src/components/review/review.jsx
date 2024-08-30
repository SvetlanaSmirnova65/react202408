export const Review = ({user, text, rating }) => {
    return (
       <>{user}: {text}  <span style={{ color: 'red' }}>{rating}</span></>
    );
  };