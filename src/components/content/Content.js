import React, { useState } from 'react'
import Button from '../button/Button'
import Checkbox from '../checkbox/Checkbox'
import Slider from '../slider/Slider'

import './Content.css'

const Content = () => {
    const [rangeValue, setRangeValue] = useState(10);

    const onChangeSlider = (e) => {
        setRangeValue(e.target.value)
    }

    const onChangeCheckbox = (e) => {
    }

    return (
        <div className='row'>
            <div className="col-md-12">
               <div className="card">
                   <div className="card-body">
                        <div className="alert alert-success d-flex justify-content-between" role="alert">
                            <div>
                                <i className="fas fa-check-circle"></i> <span className='password-content'>An example success alert with an icon</span>
                            </div>
                            <div>
                                <Button 
                                    className='btn btn-sm btn-success' 
                                    iconClass='fas fa-sync'/>
                                <Button 
                                    className='btn btn-sm btn-success' 
                                    iconClass='fas fa-copy'/>
                            </div>
                        </div>

                        <form className="row gx-3 gy-2 align-items-center">
                            <div className='row'>
                                <Slider 
                                    min={1}
                                    max={60}
                                    step={1}
                                    value={parseInt(rangeValue, 10)}
                                    defaultlength={parseInt(rangeValue, 10)}
                                    changevalue={onChangeSlider}/>
                            </div>
                            <div className="col">
                                <Checkbox 
                                    label="Uppercase"
                                    name="uppercase"
                                    value={true}
                                    checked={true}
                                    onChange={onChangeCheckbox}/>
                            </div>
                            <div className="col">
                                <Checkbox 
                                    label="Lowercase"
                                    name="lowercase"
                                    value={true}
                                    checked={true}
                                    onChange={onChangeCheckbox}/>
                            </div>
                            <div className="col">
                                <Checkbox 
                                    label="Symbols"
                                    name="symbols"
                                    value={true}
                                    checked={true}
                                    onChange={onChangeCheckbox}/>
                            </div>
                            <div className="col">
                                <Checkbox 
                                    label="Numbers"
                                    name="numbers"
                                    value={true}
                                    checked={true}
                                    onChange={onChangeCheckbox}/>
                            </div>
                        </form>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Content
