import React from 'react'

export default function EditSprintModal(props) {
    React.useEffect(() => {
        if(props.sprintToEdit.title !== '' && props.sprintToEdit.dueDate !== ''){
             document.getElementById('saveChangesBtn').setAttribute('data-bs-dismiss', 'modal')
            }
        },
        [props.sprintToEdit]
    )

   function handleChange(event) {
        const {name, value,} = event.target
        props.setSprintToEdit(sprint => (
            {
                ...sprint,
                [name]: value
            }
        ))
    }
    function handleSubmit(event){
        event.preventDefault()
        props.saveChanges()
    }
    return (
        <div className='modal fade' id='editSprintModal' tabIndex='-1' aria-labelledby='editSprintTitle' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
                <div className='modal-content'>
                    <div className='modal-header bg-success text-white'>
                        <div className='modal-title' id='editSprintTitle'>Edit Sprint</div>
                        <button className='btn-close btn-close-white' type='button' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className="modal-body">
                        <form id='editSprintForm' onSubmit={handleSubmit}>
                            <input 
                                type='text'
                                placeholder='Sprint Title'
                                name='title'
                                onChange={handleChange}
                                value={props.sprintToEdit.title}
                                className='form-control w-100 my-2'
                                required
                            />
                            <textarea 
                                placeholder='Add Description'
                                name='description'
                                onChange={handleChange}
                                value={props.sprintToEdit.description}
                                className='form-control w-100 my-2'
                            />
                            <div className='text-secondary ms-2 ps-1'>Due Date:</div>
                            <input 
                                type='date'
                                name='dueDate'
                                onChange={handleChange}
                                value={props.sprintToEdit.dueDate}
                                className='form-control w-100 my-2'
                                required
                            />
                            <button id='saveChangesBtn' className='btn btn-success' type='submit'>Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}