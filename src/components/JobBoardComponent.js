import React from 'react';

const JobBoardComponent = ({ job }) => {

    return (
        <div className="flex bg-white shadow-md m-4 p-4">
            <div>
                <img src={job.logo} alt={job.company}></img>
            </div>
            <div></div>
            <div></div>
        </div>

    );
}

export default JobBoardComponent;