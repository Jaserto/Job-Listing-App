import React from 'react';

const JobBoardComponent = ({ job, handleTagClick }) => {

    const tags = [job.role, job.level];

    if (job.tools) {
        tags.push(...job.tools);
    }
    if (job.languages) {
        tags.push(...job.languages);
    }


    return (
        <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${job.featured && 'border-l-4 border-teal-500 border-solid'
            } lg:flex-row`}>
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 lg:mt-0 lg:h-24 lg:w-24 lg:mb-0" src={job.logo} alt={job.company} />
            </div>

            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-xl text-teal-500">{job.company}
                    {job.new && (<span className="bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full uppercase text lg"> New</span>)}
                    {job.featured && (<span className="bg-gray-800 text-white text-center font-bold m-2 py-1 px-2 rounded-full uppercase text lg"> Featured</span>)}
                </h3>
                <h2 className="font-bold text-xl my-2 lg:my-0">{job.position}</h2>
                <p className="text-gray-700">
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>
            <div className=" flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-200 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
                {
                    tags ? tags.map((tag) =>
                        <span
                            onClick={() =>
                                handleTagClick(tag)}
                            className="text-teal-500 bg-teal-100 
                                font-bold rounded mr-4 mb-4 p-2 lg:mb-0">
                            {tag}
                        </span>) : ''
                }
            </div>
        </div>

    );
}

export default JobBoardComponent;