import React, { useState } from 'react';
import UserJobCardList from './UserJobCardList';
import Empty from "../../../assets/empty.png"

function UserJobScreen(props) {
  const [jobs, setJobs] = useState([
    {
      company: 'BeliBeli',
      name: 'FrontEnd Engineer',
      category: 'Engineer',
      country: 'Remote',
      image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143588628/original/07d1836d98009dc8b8dcbf4ea400b05a6f7f4695/make-you-a-meme-logo.png'
    },
    {
      company: 'Warungpedia',
      name: 'Recruiter',
      category: 'HR',
      country: 'Jakarta, Indonesia',
      image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143588628/original/07d1836d98009dc8b8dcbf4ea400b05a6f7f4695/make-you-a-meme-logo.png'
    },
    {
      company: 'Kupon.com',
      name: 'Business Development',
      category: 'Business',
      country: 'Mountview, CLA',
      image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143588628/original/07d1836d98009dc8b8dcbf4ea400b05a6f7f4695/make-you-a-meme-logo.png'
    },
  ])

  return (
    <>
      {
        jobs.length > 0 ?
          (<UserJobCardList jobs={jobs} />) :
          (
            <div className="text-center m-auto">
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                <span className="block">No job listing available yet</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-fourth">
                Please wait while recruiter prepare job lists
              </p>
              <img className="w-96 m-auto" src={Empty} alt="" />
            </div>
          )
      }
    </>
  );
}

export default UserJobScreen;