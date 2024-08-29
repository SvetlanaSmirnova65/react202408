import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {menu.length ? <Menu menu={menu} /> : <div>Нет меню</div>}  
      <h3>Отзывы</h3>
      {reviews.length ? <Reviews reviews={reviews} /> : <div>Нет отзывов</div>}
      <h3>Создать отзыв</h3>
      <ReviewForm/>
    </section>
  );
};