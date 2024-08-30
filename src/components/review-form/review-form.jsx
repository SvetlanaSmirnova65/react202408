import {useForm} from "./use-form";
import { Counter } from "../counter/counter";

export const ReviewForm = () => {
    const {form, setName, setText, setIncrementRating, setDecrementRating, clearForm} = useForm();
    const {name, text, rating} = form;

    return (
        <div>
            <div>
                <button onClick={clearForm}>Очистить форму</button>
            </div>
            <div>
                <span>Имя</span>
                <input
                    type='text'
                    value={name}
                    onChange={setName}
                />
            </div>
            <div>
                <span>Текст</span>
                <input
                    type='text'
                    value={text}
                    onChange={setText}
                />
            </div>
            <div>
                <span>Рейтинг</span>
                <Counter 
                    value={rating}
                    increment={setIncrementRating}
                    decrement={setDecrementRating}
                />
            </div>
        </div>
    )
}