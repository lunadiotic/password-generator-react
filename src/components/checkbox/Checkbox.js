import React from 'react';

const Checkbox = (props) => {
    const {label, name, value, checked, onChange } = props
    
    return (
        <div className="form-check">
            <input
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="form-check-input"
                type="checkbox"
                id=""
            />
            <label className="form-check-label" htmlFor="">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
