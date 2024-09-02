import {useReducer} from "react";

const DEFAULT_FROM_VALUE = {
    name: "",
    text: "",
    rating: 5
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'SET_NAME':
            return {...state, name: payload.target.value};
        case 'SET_TEXT':
            return {...state, text: payload.target.value};
        case 'INCREMENT_RATING':
            return {...state, rating: Math.min(state.rating + 1, 5)};
        case 'DECREMENT_RATING':
            return {...state, rating: Math.max(state.rating - 1, 1)};
        case 'CLEAR_FORM':
            return {...DEFAULT_FROM_VALUE};
        default:
            return state;
        }
}

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FROM_VALUE);    
    const setName = (event) => dispatch({type: 'SET_NAME', payload: event}); 
    const setText = (event) => dispatch({type: 'SET_TEXT', payload: event}); 
    const setIncrementRating = () => dispatch({type: 'INCREMENT_RATING'}); 
    const setDecrementRating = () => dispatch({type: 'DECREMENT_RATING'}); 
    const clearForm = () => dispatch({type: 'CLEAR_FORM'}); 

    return {
        form,
        setName,
        setText,
        setIncrementRating,
        setDecrementRating,
        clearForm
    }
}