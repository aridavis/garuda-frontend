import { ChatIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { Mic, MicOff, Videocam, VideocamOff } from '@mui/icons-material';
import React, { useState } from 'react';
import MeetingDetailDialog from './MeetingDetailDialog';

function MeetingControl(props) {
  const [isStreamingMic, setIsStreamingMic] = useState(false)
  const [isStreamingVideo, setIsStreamingVideo] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="flex-shrink-0 relative h-16 bg-white flex items-center">
      <MeetingDetailDialog
        isOpen={isDialogOpen}
        closeDialog={() => {
          setIsDialogOpen(false)
        }}
      />
      <div className="m-auto">
        <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
          <div className="flex items-center space-x-8 justify-center">
            <span className="inline-flex">
              <button
                className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
                onClick={() => {
                  setIsStreamingMic(!isStreamingMic)
                }}
              >
                {
                  isStreamingMic ?
                    <Mic className="h-6 w-6" aria-hidden="true" /> :
                    <MicOff className="h-6 w-6" aria-hidden="true" />
                }
              </button>
            </span>
            <span className="inline-flex">
              <button
                className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
                onClick={() => {
                  setIsStreamingVideo(!isStreamingVideo)
                }}
              >
                {
                  isStreamingVideo ?
                    <Videocam className="h-6 w-6" aria-hidden="true" /> :
                    <VideocamOff className="h-6 w-6" aria-hidden="true" />
                }
              </button>
            </span>
            <span className="inline-flex">
              <button
                className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
                onClick={() => {
                  setIsDialogOpen(true)
                }}
              >
                <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </span>
            <span className="inline-flex">
              <button
                className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
                onClick={props.toggleChat}
              >
                <ChatIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingControl;