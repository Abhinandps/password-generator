import React, { useState } from 'react';
import './InputRange.css';

const InputRange = ({ min, max, step, initialValue, onLengthChange, type, name }: any) => {

    return (
        <div className="custom-input-range">
            <label className='input-label'>
                Password Length: {initialValue}
            </label>
            <input
                type={type}
                name={name}
                min={min}
                max={max}
                step={step}
                value={initialValue}
                onChange={onLengthChange}
            />
        </div>
    );
};

export default InputRange;
