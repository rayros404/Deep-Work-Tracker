import React from 'react'
import CompletedSprint from './CompletedSprint'

export default function CompletedSprintList(props){
    function handleEdit(id) {
        props.setSprintToEdit(props.completedSprintList.find(sprint => sprint.id === id))
    }
    
    function handleDelete(id) {
        props.setSprintToDelete(props.completedSprintList.find(sprint => sprint.id === id))
    }
    function handleIncomplete(id) {
        let tempSprint = {}
        for (let i = 0; i < props.completedSprintList.length; i++){
            if (props.completedSprintList[i].id === id){
                tempSprint = {...props.completedSprintList[i], completeDate: ''}
                break
            } 
        }
        props.setUnfinishedSprintList(prevList => ([
            ...prevList,
            tempSprint
        ]))
        props.setCompletedSprintList(prevSprints => (
            prevSprints.filter(sprint => sprint.id !== id)
        ))
    }
    const completedSprintCards = props.completedSprintList.map(sprint => (
        <CompletedSprint 
            item={sprint}
            key={sprint.id}
            handleDelete={() => handleDelete(sprint.id)}
            handleEdit={() => handleEdit(sprint.id)}
            handleIncomplete={() => handleIncomplete(sprint.id)}
            setCompletedSprintList={props.setCompletedSprintList}
            setUnfinishedSprintList={props.setUnfinishedSprintList}
        />
    ))
    return (
        <div className='card my-3'>
            <div className='card-header bg-success text-white'>Completed Sprints</div>

            {/* organize using an accordion */}
            <div className='accordion accordion-flush' id='completed-sprints-accordion'>
                {completedSprintCards}
            </div>
        </div>
    )
}