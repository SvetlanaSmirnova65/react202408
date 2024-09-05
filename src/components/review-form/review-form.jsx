import {useForm} from "./use-form";
import { Counter } from "../counter/counter";
import { Button } from "../button/button";

import styles from "./review-form.module.css";

export const ReviewForm = () => {
    const {form, setName, setText, setIncrementRating, setDecrementRating, clearForm} = useForm();
    const {name, text, rating} = form;

    return (
        <div>
            <div>
                <Button onClick={clearForm} className={styles.button} viewVariant='default'>
                    Очистить форму
                </Button>
            </div>
            <div>
                <span className={styles.label}>Имя</span>
                <input
                    type='text'
                    value={name}
                    onChange={setName}  
                    className={styles.textbox}                  
                />
            </div>
            <div>
                <span className={styles.label}>Текст</span>
                <input
                    type='text'
                    value={text}
                    onChange={setText}
                    className={styles.textbox}
                />
            </div>
            <div>
                <span className={styles.label}>Рейтинг</span>
                <Counter 
                    value={rating}
                    increment={setIncrementRating}
                    decrement={setDecrementRating}
                    className={styles.button}
                    viewVariant='default'
                />
            </div>
        </div>
    )
}