import React from 'react'

export default function Help() {
    return(
        <div className='modal fade' id='helpModal' tabIndex='-1' aria-labelledby='helpTitle' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
                <div className='modal-content'>
                    <div className='modal-header bg-success text-white'>
                        <div className='modal-title' id='statsTitle'>Help</div>
                        <button className='btn-close btn-close-white' type='button' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className="modal-body">
                        <h5>What is this?</h5>
                        <p>This project was inspired by Cal Newport's book <i>Deep Work</i> in which he advocates concentrated work and deliberate practice. He recommends those interested in doing deep work to track the their wildly important tasks and the corresponding number of hours needed to complete them.<strong> Thus, this is a tool that does just that.</strong></p>
                        <br />
                        <h5>What are sprints?</h5>
                        <p>Newport suggests to work like Teddy Roosevelt. In order to do so, one would need to estimate how long it would take to finish a particular task. Then, he or she would set a deadline that is a little shorter than the estimated deadline. Thus, in order to complete the task before the deadline, one would need to focus entirely on that task while cutting out other unnecessary tasks. Newport calls these blocks of concentrated work "Roosevelt Sprints."</p>
                        <br />
                        <h5>Why did you make this?</h5>
                        <p><i>Deep Work </i>inspired me to start taking my web development journey more seriously. My grand gesture for becoming a disciple of deep work was to create this app after learning React and Bootstrap. And of course, hopefully this tool proves useful to other readers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}