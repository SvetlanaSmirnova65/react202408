import { ThemeButton } from "../theme-button/theme-button";
import { AuthButton } from "../auth-button/auth-button";

export const Header = () => {
    return <header>
              header
              <div>
                <ThemeButton/>
                <AuthButton/>
              </div>
           </header>;
  };