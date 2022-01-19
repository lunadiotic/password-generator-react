import React from 'react'
import Button from '../button/Button'
import Slider from '../slider/Slider'

import './Content.css'

const Content = () => {
    const onChangeSlider = (e) => {
        console.log(e.target.value)
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
                        <div className="alert alert-warning d-flex justify-content-between" role="alert">
                            <div>
                                <i className="fas fa-exclamation-triangle"></i> <span className='password-content'>An example success alert with an icon</span>
                            </div>
                            <div>
                                <Button 
                                    className='btn btn-sm btn-warning' 
                                    iconClass='fas fa-sync'/>
                                <Button 
                                    className='btn btn-sm btn-warning' 
                                    iconClass='fas fa-copy'/>
                            </div>
                        </div>
                        <div className="alert alert-danger d-flex justify-content-between" role="alert">
                            <div>
                                <i className="fas fa-times-circle"></i> <span className='password-content'>An example success alert with an icon</span>
                            </div>
                            <div>
                            <Button 
                                    className='btn btn-sm btn-danger' 
                                    iconClass='fas fa-sync'/>
                                <Button 
                                    className='btn btn-sm btn-danger' 
                                    iconClass='fas fa-copy'/>
                            </div>
                        </div>

                        <form className="row gx-3 gy-2 align-items-center">
                            <div className='row'>
                                <Slider 
                                    min={1}
                                    max={60}
                                    step={1}
                                    value={10}
                                    defaultlength={10}
                                    onChangeValue={onChangeSlider}/>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="autoSizingCheck2">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="autoSizingCheck2">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="autoSizingCheck2">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="autoSizingCheck2">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        </form>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Content
