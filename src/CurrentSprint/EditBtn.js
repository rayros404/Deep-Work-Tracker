import React from 'react'

export default function EditBtn(props){
    const [editSprintForm, setEditSprintForm] = React.useState(props.currentSprint)

    React.useEffect(() => {
        if(editSprintForm.title !== '' && editSprintForm.dueDate !== ''){
             document.getElementById('saveChangesBtn').setAttribute('data-bs-dismiss', 'modal')
            }
        },
        [editSprintForm]
    )

   function handleChange(event) {
        const {name, value,} = event.target
        setEditSprintForm(currSprintForm => (
            {
                ...currSprintForm,
                [name]: value
            }
        ))
    }
    function handleSubmit(event){
        event.preventDefault()
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0')
        let yyyy = today.getFullYear()
        today = `${yyyy}-${mm}-${dd}`
        
        props.setCurrentSprint({
            ...editSprintForm,
            startDate: today,   
        })
    }
    return (
        <React.Fragment>
            <button className='btn' type='button' data-bs-toggle='modal' data-bs-target='#editModal'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </button>
            <div className='modal fade' id='editModal' tabIndex='-1' aria-labelledby='editTitle' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header bg-success text-white'>
                            <div className='modal-title' id='deleteTitle'>Edit Sprint</div>
                            <button className='btn-close btn-close-white' type='button' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className="modal-body">
                            <form id='editSprintForm' onSubmit={handleSubmit}>
                                <input 
                                    type='text'
                                    placeholder='Sprint Title'
                                    name='title'
                                    onChange={handleChange}
                                    value={editSprintForm.title}
                                    className='form-control w-100 my-2'
                                    required
                                />
                                <textarea 
                                    placeholder='Add Description'
                                    name='description'
                                    onChange={handleChange}
                                    value={editSprintForm.description}
                                    className='form-control w-100 my-2'
                                />
                                <div className='text-secondary ms-2 ps-1'>Due Date:</div>
                                <input 
                                    type='date'
                                    name='dueDate'
                                    onChange={handleChange}
                                    value={editSprintForm.dueDate}
                                    className='form-control w-100 my-2'
                                    required
                                />
                                <button id='saveChangesBtn' className='btn btn-success' type='submit'>Save Changes</button>
                                
                            </form>
                        </div>
                        </div>
                    </div>
                </div>

        </React.Fragment>
    )
}