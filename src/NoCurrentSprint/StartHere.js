import React from 'react'
import { nanoid } from 'nanoid'


export default function StartHere(props){
    const [newSprintForm, setNewSprintForm] = React.useState({
            id: nanoid(),
            title: '',
            hours: 0,
            description: '',
            startDate: '',
            dueDate: '',
            completeDate: '',
        })
    
    React.useEffect(() => {
        if(newSprintForm.title !== '' && newSprintForm.dueDate !== ''){
             document.getElementById('startBtn').setAttribute('data-bs-dismiss', 'modal')
            }
        },
        [newSprintForm]
    )


    function handleChange(event) {
        const {name, value,} = event.target
        setNewSprintForm(currSprintForm => (
            {
                ...currSprintForm,
                [name]: value
            }
        ))
    }

   

    function handleSubmit(event) {
        event.preventDefault()

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0')
        let yyyy = today.getFullYear()
        today = `${yyyy}-${mm}-${dd}`
        
        props.setCurrentSprint({
            ...newSprintForm,
            startDate: today,   
        })

        setNewSprintForm({
            id: nanoid(),
            title: '',
            hours: 0,
            description: '',
            startDate: '',
            dueDate: '',
            completeDate: '',
        })
    }

    return (
        <div>
            <button className='btn btn-success mb-4' data-bs-toggle='modal' data-bs-target='#newSprintModal'>
                    Start Here
            </button>
            <div className='modal fade' id='newSprintModal' tabIndex='-1' aria-labelledby='newSprintTitle' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header bg-success text-white'>
                            <div className='modal-title' id='newSprintTitle'>New Sprint</div>
                            <button className='btn-close btn-close-white' type='button' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className="modal-body">
                            <form id='newSprintForm' onSubmit={handleSubmit}>
                                <input 
                                    type='text'
                                    placeholder='Sprint Title'
                                    name='title'
                                    onChange={handleChange}
                                    value={newSprintForm.title}
                                    className='form-control w-100 my-2'
                                    required
                                />
                                <textarea 
                                    placeholder='Add Description'
                                    name='description'
                                    onChange={handleChange}
                                    value={newSprintForm.description}
                                    className='form-control w-100 my-2'
                                />
                                <div className='text-secondary ms-2 ps-1'>Due Date:</div>
                                <input 
                                    type='date'
                                    name='dueDate'
                                    onChange={handleChange}
                                    value={newSprintForm.dueDate}
                                    className='form-control w-100 my-2'
                                    required
                                />
                            <button id='startBtn' className='btn btn-success' type='submit'>Start</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}