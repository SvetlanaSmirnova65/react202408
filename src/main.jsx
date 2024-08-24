import { createElement } from 'react';
import { createRoot } from 'react-dom/client'
import { restaurants } from "./mock";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <h1>restaurants app</h1>
    {
      restaurants.map((restaurant) => (
        <section>
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>
          <ul>
            {
              restaurant.menu.map((menuItem) => (
                <li>{menuItem.name}</li>
              ))
            }
          </ul>
          <h3>Отзывы</h3>
          <ul>
            {
              restaurant.reviews.map((reviewItem) => (
                <li>{reviewItem.text}</li>
              ))
            }
          </ul>
        </section>
      ))
    }
  </div>
);