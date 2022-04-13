import React from 'react'
import EditSprintBtn from './EditSprintBtn'
import DeleteSprintBtn from './DeleteSprintBtn'

export default function UnfinishedSprint(props){
    function formatDate(dateStr) {
        let newDateStr = (dateStr.slice(4) + '/' + dateStr.slice(0,4)).slice(1).replace('-', '/')
        return newDateStr
    }
    
    function getDayName(dateStr, locale){
        let date = new Date(dateStr)
        return date.toLocaleDateString(locale, { weekday: 'long' })
    }
    return (
        <div className='accordion-item'>
            <h2 className='accordion-header' id={`unfinished-header${props.item.id}`}>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target={`#unfinished-collapse${props.item.id}`} aria-expanded='false' aria-controls={`unfinished-collapse${props.item.id}`}>
                    {props.item.title}
                </button>
            </h2>
            <div className='accordion-collapse collapse' id={`unfinished-collapse${props.item.id}`} aria-labelledby={`unfinished-header${props.item.id}`} data-bs-parent='#unfinished-sprints-accordion'>
                <div className='accordion-body card'>
                    <div className='card-body'>
                        <div className='modify-btns d-flex justify-content-end'>
                            <EditSprintBtn 
                                handleEdit={props.handleEdit}
                            />
                            <DeleteSprintBtn 
                                handleDelete={props.handleDelete}
                            />
                        </div>
                        <h5 className='card-title'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="green" className="bi bi-diamond-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/>
                            </svg>
                            <span className='mx-2'>{props.item.title}</span>
                        </h5>
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
                        </li>
                        }
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
                        <li className='list-group-item border-0'>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                </svg>
                                <span className='mx-3'>{props.item.hours} Hours</span>
                            </div>
                        </li>
                    </ul>
                    <div className='card-body d-flex justify-content-center'>
                        <button className='btn btn-outline-success btn-lg mx-2' onClick={props.handleResume}>
                            Resume
                        </button>
                        <button className='btn btn-success btn-lg mx-2' onClick={props.handleComplete}>
                            Complete
                        </button>
                    </div>   
                </div>
            </div>
        </div>
    )
}