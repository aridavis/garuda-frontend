import { ClipboardCheckIcon, DocumentSearchIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import JobApplyDialog from './JobApplyDialog';
import JobDetailDialog from './JobDetailDialog';

function UserJobCardItem(props) {
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isApplyOpen, setIsApplyOpen] = useState(false)

  return (
    <li key={props.job.name + props.index} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <JobDetailDialog
        job={props.job}
        isOpen={isDetailOpen}
        closeDialog={() => {
          setIsDetailOpen(false)
        }}
      />
      <JobApplyDialog
        job={props.job}
        isOpen={isApplyOpen}
        closeDialog={() => {
          setIsApplyOpen(false)
        }}
      />
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="w-20 h-20 bg-white rounded-full flex m-auto border-primary border-2 overflow-hidden">
            <img className="object-contain m-auto" src={props.job.image} alt="" />
          </div>
          <div className="flex items-center space-x-3">
            <h3 className="text-lg text-primary font-medium truncate text-center">{props.job.company}</h3>
          </div>
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">{props.job.name}</h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {props.job.category}
            </span>
          </div>
          <p className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {props.job.country}
          </p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <button
            className="w-0 flex-1 flex justify-center items-center py-2 cursor-pointer"
            onClick={() => {
              setIsDetailOpen(true);
            }}
          >
            <DocumentSearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">View Details</span>
          </button>
          <button
            className="w-0 flex-1 flex justify-center items-center py-2"
            onClick={() => {
              setIsApplyOpen(true);
            }}
          >
            <ClipboardCheckIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">Apply</span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default UserJobCardItem;