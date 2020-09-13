import React, { useState, useEffect } from 'react';
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, [])



  const filterFunc = (job) => {
    const tags = [job.role, job.level, job.tools, job.languages];

    if (filters.length === 0) {
      return true;
    }

    if (job.tools) {
      tags.push(...job.tools);
    }
    if (job.languages) {
      tags.push(...job.languages);
    }

    return filters.every(filter => tags.includes(filter));

  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <header className="bg-teal-500 mb-4">
        <img src="/images/bg-header-desktop.svg" />
      </header>

      <div className="container m-auto">

        {filters.length > 0 &&
          (<div className={`flex bg-white shadow-md my-16 mx-10 p-6 rounded`}>

            {filters.map(
              (filter) => (
                <span
                  className='text-teal-500 bg-teal-100 cursor-pointer mr-4 mb-4 rounded font-bold p-2 lg:mb-0'
                  onClick={() =>
                    handleFilterClick(filter)}>
                  ✕  {filter}</span>

              ))}
            <button
              className="font-bold text-gray-700 ml-auto"
              onClick={clearFilters}
            >Clear</button>
          </div>
          )}
        {
          jobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
              filteredJobs.map(job => (
                <JobBoardComponent
                  job={job}
                  key={job.id}
                  handleTagClick={handleTagClick}
                />
              ))

            )
        }
      </div>
    </>

  );
}

export default App;

//TODOs
// 1. studi design & json
// 2 Job board component
// 3 get de data from the json 
// 4 pass down the date to the JBC
// 5 style it
// 6 filter component
//7 filter the data