import React from 'react';
import PropTypes from 'prop-types'

const Slider = (props) => {
    const { step, min, max, value, defaultlength, onChangeValue } = props

    const handleChange = (max) => (e) => {
        onChangeValue(e)
    }

    return (
        <>  
            <div className="col-11">
                <input
                    step={step}
                    min={min}
                    max={max}
                    value={value}
                    defaultlength={10}
                    onChange={handleChange(max)}
                    type="range" 
                    className="form-range" 
                    id='range-input'/>
            </div>
            <div className="col-1 text-center">
                <span className='badge bg-secondary'>10</span>
            </div>
        </>
    );
};

Slider.propTypes = {
    step: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    defaultlength: PropTypes.number.isRequired,
    onChangeValue: PropTypes.func.isRequired,
}

export default Slider;
