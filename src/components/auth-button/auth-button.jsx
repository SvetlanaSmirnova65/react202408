import { Button } from "../button/button";
import { useAuth } from "../auth-context/use-auth";

export const AuthButton = () => {
  const { auth, userLogin } = useAuth();
  const { isAuthorized, name } = auth;
  return (
    <div>
      {isAuthorized && name && <div>{auth.name}</div>}
      <Button onClick={userLogin}>{isAuthorized ? "Выйти" : "Войти"}</Button>
    </div>
  );
};