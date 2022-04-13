import React from 'react'

export default function DeleteSprintModal(props) {
    return (
        <div className='modal fade' id='deleteSprintModal' tabIndex='-1' aria-labelledby='deleteSprintTitle' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
                <div className='modal-content'>
                    <div className='modal-header bg-danger text-white'>
                        <div className='modal-title' id='deleteSprintTitle'>Delete Sprint</div>
                        <button className='btn-close btn-close-white' type='button' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className="modal-body">
                        <div className='are-you-sure'>
                            Are you sure you want to delete this Sprint?
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-outline-danger m-3' data-bs-dismiss='modal' onClick={props.confirmDelete}>Yes</button>
                            <button className='btn btn-danger m-3' data-bs-dismiss='modal'>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}