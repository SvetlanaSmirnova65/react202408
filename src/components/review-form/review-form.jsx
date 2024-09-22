import {useForm} from "./use-form";
import { Counter } from "../counter/counter";
import { Button } from "../button/button";
import { useAuth } from "../auth-context/use-auth";

import styles from "./review-form.module.css";

export const ReviewForm = ({onSave}) => {
    const {form, setText, setIncrementRating, setDecrementRating, clearForm} = useForm();
    const { text, rating} = form;
    const { auth, userLogin } = useAuth();
    const { isAuthorized, name, id } = auth;
    
    return (
        <div>
            <div>
                <Button onClick={clearForm} className={styles.button} viewVariant='default'>
                    Очистить форму
                </Button>
            </div>
            <div>
                <span className={styles.label}>Имя </span>
                <span>{auth.name}</span>
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
                {
                    isAuthorized ? 
                    <>
                        <span className={styles.label}>Рейтинг</span>
                        <Counter 
                            value={rating}
                            increment={setIncrementRating}
                            decrement={setDecrementRating}
                            className={styles.button}
                            viewVariant='default'
                        />
                        <Button
                            onClick={() => {
                                onSave({ text, rating });
                            }}
                            className={styles.button}
                            viewVariant='default'
                        >
                            Сохранить
                        </Button>
                    </>
                    : null
                }
            </div>
        </div>
    )
}