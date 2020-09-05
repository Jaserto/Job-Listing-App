import React from 'react';

const JobBoardComponent = ({ job }) => {

    const langAndTools = [];

    if (job.tools) {
        langAndTools.push(...job.tools);
    }
    if (job.languages) {
        langAndTools.push(...job.languages);
    }


    return (
        <div className="flex bg-white shadow-md m-4 p-4">
            <div>
                <img src={job.logo} alt={job.company}></img>
            </div>

            <div className="flex flex-col justify-between ml-3">
                <h3 className="font-bold text-xl text-teal-500">{job.company}</h3>
                <h2 className="font-bold text-xl">{job.position}</h2>
                <p className="text-gray-700">
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>
            <div className=" flex items-center justify-end ml-auto">
                {
                    langAndTools ? langAndTools.map((langAndTool) =>
                        <span className="text-teal-500 bg-teal-100 font-bold rounded m-2 p-2 ">{langAndTool}</span>) : ''
                }
            </div>
        </div>

    );
}

export default JobBoardComponent;