import React, { useState, useEffect } from 'react';
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data)
  }, [])


  return (
    <div className="App">
      <header className="bg-teal-500 mb-4">
        <img src="/images/bg-header-desktop.svg" />
      </header>

      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
            jobs.map(job => (
              <JobBoardComponent job={job} key={job.id} />
            ))

          )
      }

    </div>

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