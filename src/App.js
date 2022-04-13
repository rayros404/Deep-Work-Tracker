import React from 'react'
import Navbar from './Navbar'
import Help from './Help'
import Statistics from './Statistics'
import Congratulations from './Congratulations'
import CurrentSprint from './CurrentSprint/CurrentSprint'
import UnfinishedSprintList from './UnfinishedSprintList/UnfinishedSprintList'
import CompletedSprintList from './CompletedSprintList/CompletedSprintList'
import NoCurrentSprint from './NoCurrentSprint/NoCurrentSprint'
import DeleteSprintModal from './DeleteSprintModal'
import EditSprintModal from './EditSprintModal'

export default function App() {
    
    // set state for current Sprint
    const [currentSprint, setCurrentSprint] = React.useState(() => 
        JSON.parse(localStorage.getItem('currentSprint')) || null
    )

    React.useEffect(() => {
        localStorage.setItem('currentSprint', JSON.stringify(currentSprint))
    }, [currentSprint])

    // set state for completed sprint list
    const [completedSprintList, setCompletedSprintList] = React.useState(() => 
        JSON.parse(localStorage.getItem('completedSprintList')) || [])
    
    React.useEffect(() => {
        localStorage.setItem('completedSprintList', JSON.stringify(completedSprintList))
    }, [completedSprintList])

    // set state for unfinished sprint list
    const [unfinishedSprintList, setUnfinishedSprintList] = React.useState(() => 
        JSON.parse(localStorage.getItem('unfinishedSprintList')) || [])

    React.useEffect(() => {
        localStorage.setItem('unfinishedSprintList', JSON.stringify(unfinishedSprintList))
    }, [unfinishedSprintList])

    // queue sprint that would like to be deleted
    const [sprintToDelete, setSprintToDelete] = React.useState({})

    // queue sprint that would like to be edited
    const [sprintToEdit, setSprintToEdit] = React.useState({
            id: '',
            title: '',
            hours: 0,
            description: '',
            startDate: '',
            dueDate: '',
            completeDate: '',
        })

    // set states for the stats (total hours, number of completed sprints, and average hours per sprint)
    const [totalHours, setTotalHours] = React.useState(0)
    const [numberCompletedSprints, setNumberCompletedSprints] = React.useState(0)
    const [avgHours, setAvgHours] = React.useState(0)

    // calculate total hours and number of completed sprints every time a sprint changes
    React.useEffect(() => {
        setNumberCompletedSprints(completedSprintList.length)

        let notCurrentHours = (
            completedSprintList.reduce((total, sprint) => (total + sprint.hours), 0) +
            unfinishedSprintList.reduce((total, sprint) => (total + sprint.hours), 0))

        if (currentSprint) {
            setTotalHours(currentSprint.hours + notCurrentHours)
        }
        else {
            setTotalHours(notCurrentHours)
        }
    }, [currentSprint, completedSprintList, unfinishedSprintList])

    React.useEffect(() => {
        if (numberCompletedSprints){
            setAvgHours(totalHours / numberCompletedSprints)
        }
    }, [totalHours, numberCompletedSprints])

    // when current sprint is completed, push current sprint to completed sprint list and empty current sprint
    React.useEffect(() => {
        if (currentSprint && currentSprint.completeDate !== '') {
            setCompletedSprintList(prevSprintList => ([
                ...prevSprintList,
                currentSprint
            ]))
            setCurrentSprint(null)
        }
    }, [currentSprint])

    function saveChanges(){
        if (sprintToEdit.completeDate !== ''){
            setCompletedSprintList(prevList => (
                prevList.map(sprint => (
                    sprint.id === sprintToEdit.id ?
                    {...sprintToEdit} :
                    sprint
                ))
            ))
        } else {
            setUnfinishedSprintList(prevList => (
                prevList.map(sprint => (
                    sprint.id === sprintToEdit.id ?
                    {...sprintToEdit} :
                    sprint
                ))
            ))
        }
    }

    function confirmDelete(){
        if (sprintToDelete.completeDate !== ''){
            setCompletedSprintList(prevList => (
                prevList.filter(sprint => sprint.id !== sprintToDelete.id)
            ))
        } else {
            setUnfinishedSprintList(prevList => (
                prevList.filter(sprint => sprint.id !== sprintToDelete.id)
            ))
        }
    }

    return (
        <div className='bg-light'>
            <div name="top"></div>
            {/* help modal */}
            <Help />

            {/* stats modal */}
            <Statistics 
                totalHours={totalHours}
                numberCompletedSprints={numberCompletedSprints}
                avgHours={avgHours}
            />

            <DeleteSprintModal 
                confirmDelete={confirmDelete}
            />

            <EditSprintModal 
                sprintToEdit={sprintToEdit}
                setSprintToEdit={setSprintToEdit}
                saveChanges={saveChanges}
            />

            {/* navbar */}
            <Navbar />

            {/* container to hold current sprint and list of previous sprints */}
            <div className='container d-flex-column justify-content-center mt-3'>
                <Congratulations 
                    completedSprintListExist={completedSprintList[0]}
                    totalHours={totalHours}
                    numberCompletedSprints={numberCompletedSprints}
                    avgHours={avgHours}
                />
                {currentSprint ? 
                <CurrentSprint 
                    item={currentSprint}
                    completedSprintListExist={completedSprintList[0]}
                    setCurrentSprint={setCurrentSprint}
                    setCompletedSprintList={setCompletedSprintList}
                /> :
                <NoCurrentSprint 
                    unfinishedSprintList={unfinishedSprintList}
                    setCurrentSprint={setCurrentSprint}
                />}
                

                {/* list of sprints to do */}
                {unfinishedSprintList[0] &&
                <UnfinishedSprintList 
                    unfinishedSprintList={unfinishedSprintList}
                    setCurrentSprint={setCurrentSprint}
                    setCompletedSprintList={setCompletedSprintList}
                    setUnfinishedSprintList={setUnfinishedSprintList}
                    setSprintToDelete={setSprintToDelete}
                    setSprintToEdit={setSprintToEdit}
                />
                }
                {/* list of previous sprints */}
                {completedSprintList[0] &&
                <CompletedSprintList 
                    completedSprintList={completedSprintList}
                    setCompletedSprintList={setCompletedSprintList}
                    setUnfinishedSprintList={setUnfinishedSprintList}
                    setSprintToDelete={setSprintToDelete}
                    setSprintToEdit={setSprintToEdit}
                />
                }
            </div>

            <a href="#top">
                <button className='btn btn-success fixed-btn border border-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                </button>
            </a>
        </div>

    )
}