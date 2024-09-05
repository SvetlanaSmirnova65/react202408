import { RestaurantPage } from "./components/restaurant-page/restaurant-page";
import { Layout } from "./components/layout/layout";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { AuthContextProvider } from "./components/auth-context/auth-context";

// Подключить глобальные стили
//import './app.css'

export const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          <RestaurantPage title='restaurants app' />
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};