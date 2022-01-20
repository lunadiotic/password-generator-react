import React, { useState } from 'react'
import Button from '../button/Button'
import Checkbox from '../checkbox/Checkbox'
import Slider from '../slider/Slider'

import './Content.css'

const CHECKBOX_LIST = [
    {
        id: 0,
        label: 'Uppercase',
        name: 'uppercase',
        isChecked: true
    },
    {
        id: 1,
        label: 'Lowercase',
        name: 'lowercase',
        isChecked: true
    },
    {
        id: 2,
        label: 'Symbols',
        name: 'symbols',
        isChecked: true
    },
    {
        id: 3,
        label: 'Numbers',
        name: 'numbers',
        isChecked: true
    },
]

const Content = () => {
    const [rangeValue, setRangeValue] = useState(10);
    const [checkbox, setCheckbox] = useState({
        uppercase: true,
        lowercase: true,
        symbols: true,
        numbers: true
    })

    const onChangeSlider = (e) => {
        setRangeValue(e.target.value)
    }

    const onChangeCheckbox = (e) => {
        let { name, checked } = e.target
        CHECKBOX_LIST.map(item => {
            if(item.name === name) {
                item.isChecked = checked
                setCheckbox({
                    [name]: item.isChecked
                })
            }
            return ''
        })
        console.log(CHECKBOX_LIST)
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
                            {CHECKBOX_LIST.map((item) => (
                                <div className="col" key={item.id}>
                                     <Checkbox 
                                        label={item.label}
                                        name={item.name}
                                        value={item.isChecked}
                                        checked={item.isChecked}
                                        onChange={onChangeCheckbox}/>
                                 </div>
                            ))}
                        </form>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Content
