import React from 'react'
import StartHere from './StartHere'

export default function NoCurrentSprint(props) {
    return (
        <div className='card w-100 current-sprint-height'>
            <div className='card-header bg-success text-white'>
                Current Sprint
            </div>
            
            <div className='card-body container d-flex flex-column justify-content-center align-items-center'>
                <div className='m-4 h5 text-center lh-base'>
                    You are not currently working on a Sprint
                </div>
                
                <StartHere 
                    setCurrentSprint={props.setCurrentSprint}
                />

                {props.unfinishedSprintList[0] &&
                <React.Fragment >
                    <div>or</div>
                    <div className='m-3'>Resume an Unfinished Sprint</div>
                </React.Fragment > 
                }
            </div>
             
        </div>
    )
}