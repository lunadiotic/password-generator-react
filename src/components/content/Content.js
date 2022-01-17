import React from 'react'

import './Content.css'

const Content = () => {
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
                                <i className="fas fa-sync"></i> <i className="fas fa-copy"></i>
                            </div>
                        </div>
                        <div className="alert alert-warning d-flex justify-content-between" role="alert">
                            <div>
                                <i class="fas fa-exclamation-triangle"></i> <span className='password-content'>An example success alert with an icon</span>
                            </div>
                            <div>
                                <i className="fas fa-sync"></i> <i className="fas fa-copy"></i>
                            </div>
                        </div>
                        <div className="alert alert-danger d-flex justify-content-between" role="alert">
                            <div>
                                <i class="fas fa-times-circle"></i> <span className='password-content'>An example success alert with an icon</span>
                            </div>
                            <div>
                                <i className="fas fa-sync"></i> <i className="fas fa-copy"></i>
                            </div>
                        </div>

                        <form className="row gx-3 gy-2 align-items-center">
                            <div>
                                <label for="customRange2" class="form-label">Example range</label>
                                <input type="range" className="form-range" id='range-input'/>
                                <output></output>
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
