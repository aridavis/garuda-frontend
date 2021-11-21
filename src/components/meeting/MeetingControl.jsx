import { Mic, MicOff, Videocam, VideocamOff } from '@mui/icons-material';
import React, { useState } from 'react';

function MeetingControl(props) {
  const [isStreamingMic, setIsStreamingMic] = useState(false)
  const [isStreamingVideo, setIsStreamingVideo] = useState(false)

  return (
    <div className="flex-shrink-0 relative h-16 bg-white flex items-center">
      <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
        <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
          <div className="flex items-center space-x-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingControl;