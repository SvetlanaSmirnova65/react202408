import { RestaurantPage } from "./components/restaurant-page/restaurant-page";
import { Layout } from "./components/layout/layout";

export const App = () => {
  return (
      <Layout>
        <RestaurantPage title='restaurants app' />
      </Layout>
  );
};