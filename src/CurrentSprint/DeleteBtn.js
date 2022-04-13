import React from 'react'

export default function DeleteBtn(props){
    function deleteCurrentSprint(){
        props.setCurrentSprint(null)
    }
    return (
        <React.Fragment>
            <button className='btn' type='button' data-bs-toggle='modal' data-bs-target='#deleteModal'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
            <div className='modal fade' id='deleteModal' tabIndex='-1' aria-labelledby='deleteTitle' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header bg-danger text-white'>
                            <div className='modal-title' id='deleteTitle'>Delete Sprint</div>
                            <button className='btn-close btn-close-white' type='button' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className="modal-body">
                            <div className='are-you-sure'>
                                Are you sure you want to delete you current Sprint?
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-outline-danger m-3' onClick={deleteCurrentSprint} data-bs-dismiss='modal'>Yes</button>
                                <button className='btn btn-danger m-3' data-bs-dismiss='modal'>No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}