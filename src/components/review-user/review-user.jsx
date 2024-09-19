import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users";

export const ReviewUser = ({id, text }) => { 
  const user = useSelector((state) => selectUserById(state, id));
  const { name } = user || {};
 
   if (!name) {
     return null;
   }

   return (
      <span>{name}: {text}</span>
    );
  }; 