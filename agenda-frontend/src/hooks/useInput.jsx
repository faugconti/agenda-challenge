import { useState } from 'react';

const useInput = (initialState,validationsFn) => {
    const [enteredValue, setEnteredValue] = useState(initialState);
    const [didEdit, setDidEdit] = useState(false);


    const valueIsValid = validationsFn(enteredValue);

    const handleInputChange = (event) => {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }

    const handleInputBlur = () => {
        setDidEdit(true);
    };


    return {
        value: enteredValue,
        setEnteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
};

export default useInput;