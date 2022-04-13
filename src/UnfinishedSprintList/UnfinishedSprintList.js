import React from 'react'
import UnfinishedSprint from './UnfinishedSprint'

export default function UnfinishedSprintList(props){
    function handleEdit(id) {
        props.setSprintToEdit(props.unfinishedSprintList.find(sprint => sprint.id === id))
    }
    function handleDelete(id) {
        props.setSprintToDelete(props.unfinishedSprintList.find(sprint => sprint.id === id))
    }
    function handleResume(id){
        props.setCurrentSprint(props.unfinishedSprintList.find(sprint => sprint.id === id))
        props.setUnfinishedSprintList(prevSprints => (
            prevSprints.filter(sprint => sprint.id !== id)
        ))
    }
    function handleComplete(id) {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0')
        let yyyy = today.getFullYear()
        today = `${yyyy}-${mm}-${dd}`

        let tempSprint = {}
        for (let i = 0; i < props.unfinishedSprintList.length; i++){
            if (props.unfinishedSprintList[i].id === id){
                tempSprint = {...props.unfinishedSprintList[i], completeDate: today}
                break
            } 
        }
        props.setCompletedSprintList(prevList => ([
            ...prevList,
            tempSprint
        ]))
        props.setUnfinishedSprintList(prevSprints => (
            prevSprints.filter(sprint => sprint.id !== id)
        ))
    }
    const unfinishedSprintCards = props.unfinishedSprintList.map(sprint => (
        <UnfinishedSprint 
            item={sprint}
            key={sprint.id}
            handleEdit={() => handleEdit(sprint.id)}
            handleDelete={() => handleDelete(sprint.id)}
            handleResume={() => handleResume(sprint.id)}
            handleComplete={() => handleComplete(sprint.id)}
        />
    ))
    return (
        <div className='card my-3'>
            <div className='card-header bg-success text-white'>Unfinished Sprints</div>

            {/* organize using an accordion */}
            <div className='accordion accordion-flush' id='unfinished-sprints-accordion'>
                {unfinishedSprintCards}
            </div>
        </div>
    )
}