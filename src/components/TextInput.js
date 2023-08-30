import React, { useState } from 'react';

export default function TextInput({ type = 'text', label }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="input-container border-2 w-80 rounded-lg">
            <input type={type} value={value} onChange={handleChange} placeholder={`Enter your ${label.toLowerCase()}`}/>
            <label className={value && 'filled'}>
                {label}
            </label>
        </div>
    );
}