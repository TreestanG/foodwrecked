import React, { useState } from 'react';

export default function TextArea({ type = 'text', label }) {
    const [value, setValue] = useState('');
    const [height, setHeight] = useState(100)

    const changeHeight = (e) => {
        setHeight(e.target.scrollHeight + 2)
        console.log(height)
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="textarea-container my-4 border-2 w-80 rounded-lg">
            <textarea onInput={changeHeight} style={{height: height}} type={type} value={value} onChange={handleChange} placeholder={`Enter your ${label.toLowerCase()}`} autofocus/>
            <label className={value && 'filled'}>
                {label}
            </label>
        </div>
    );
}