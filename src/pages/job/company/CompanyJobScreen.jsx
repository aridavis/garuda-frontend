import React, { useState } from 'react';
import CompanyJobCardList from './CompanyCardList';
import Empty from "../../../assets/empty.png"
import CreateJobDialog from './CreateJobDialog';

function CompanyJobScreen(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [jobs, setJobs] = useState([
    {
      name: 'Frontend Engineer',
      category: 'Engineer',
      country: 'Remote',
    },
    {
      name: 'Recruiter',
      category: 'HR',
      country: 'Jakarta, Indonesia',
    },
    {
      name: 'Business Development',
      category: 'Business',
      country: 'Mountview, CLA',
    },
  ])

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="mx-auto mb-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={()=>{
          setIsDialogOpen(true)
        }}
      >
        Create New Job Listing +
      </button>
      <CreateJobDialog 
        isOpen={isDialogOpen} 
        closeDialog={() => {
          setIsDialogOpen(false)
        }} 
      />
      {
        jobs.length > 0 ?
          (<CompanyJobCardList jobs={jobs} />) :
          (
            <div className="text-center m-auto">
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                <span className="block">No job listing available yet</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-fourth">
                Please create one to see it here...
              </p>
              <img className="w-96 m-auto" src={Empty} alt="" />
            </div>
          )
      }
    </div>
  );
}

export default CompanyJobScreen;