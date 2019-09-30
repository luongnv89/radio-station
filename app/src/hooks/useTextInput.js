import { useState } from 'react';

export const useFormInput = props => {
    const [text, setText] = useState('');
    const onChange = (input) => {
        setText(input.target.value);
    }
    return [text, onChange];
}

