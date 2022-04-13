import React from 'react'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'

export default function CurrentSprint(props) {
    function increaseHours(){
        props.setCurrentSprint(prev => ({
            ...prev,
            hours: prev.hours + 1
        }))
    }
    function decreaseHours(){
        props.setCurrentSprint(prev => ({
            ...prev,
            hours: prev.hours - 1
        }))
    }

    function handleComplete(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0')
        let yyyy = today.getFullYear()
        today = `${yyyy}-${mm}-${dd}`
        props.setCurrentSprint(prev => ({
            ...prev,
            completeDate: today
        }))
    }
    function formatDate(dateStr) {
        let newDateStr = (dateStr.slice(4) + '/' + dateStr.slice(0,4)).slice(1).replace('-', '/')
        return newDateStr
    }
    
    function getDayName(dateStr, locale){
        let date = new Date(dateStr)
        return date.toLocaleDateString(locale, { weekday: 'long' })
    }
    return (
        
        <div className='card w-100 current-sprint-height'>
            <div className='card-header bg-success text-white'>
                Current Sprint
            </div>
            <div className='card-body'>
                <div className='modify-btns d-flex justify-content-end'>
                    {/* edit button (pen) */}
                    <EditBtn 
                        currentSprint={props.item}
                        setCurrentSprint={props.setCurrentSprint}
                    />

                    {/* delete button (trashcan) */}
                    <DeleteBtn 
                        setCurrentSprint={props.setCurrentSprint}
                    />
                </div>
                <h5 className='card-title'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="green" className="bi bi-diamond-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/>
                    </svg>
                    <span className='mx-2'>{props.item.title}</span>
                </h5>
                <div className='d-flex justify-content-center'>
                    <div className='hour-counter d-flex align-items-center mt-2'>
                        <button className='btn btn-success rounded-circle' onClick={decreaseHours} disabled={props.item.hours === 0 ? true : false}>-</button>
                        <div className='hour-count border border-success rounded-circle d-flex justify-content-center align-items-center'>{props.item.hours}</div>
                        <button className='btn btn-success rounded-circle' onClick={increaseHours}>+</button>
                    </div>
                </div>
                <div className='text-center hour-counter-label'>Hours</div>
            </div>
            <ul className='list-group list-group-flush'>
                {props.item.description && 
                <li className='list-group-item border-0'>
                    <div className='d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-body-text" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
                        </svg>
                        <span className='mx-3'>{props.item.description}</span>
                    </div>
                </li>}
                <li className='list-group-item border-0'>
                    <div className='d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                        <span className='mx-3'>{`${getDayName(formatDate(props.item.startDate))} ${formatDate(props.item.startDate)}`}</span>
                    </div>
                </li>
                <li className='list-group-item border-0'>
                    <div className='d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                        <span className='mx-3'>{`${getDayName(formatDate(props.item.dueDate))} ${formatDate(props.item.dueDate)}`}</span>
                    </div>
                </li>
            </ul>
             <div className='card-body d-flex justify-content-center'>
                <button className='btn btn-success btn-lg' type='button' onClick={handleComplete} data-bs-toggle='modal' data-bs-target='#completeModal'>
                    Complete
                </button>
            </div>
        </div>
    )
}