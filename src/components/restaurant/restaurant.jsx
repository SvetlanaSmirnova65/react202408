import { Counter } from "../counter/counter";
import { Menu } from "../menu/menu";
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
    </section>
  );
};