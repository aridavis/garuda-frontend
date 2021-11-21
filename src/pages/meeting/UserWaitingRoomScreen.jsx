import React from 'react';

function UserWaitingRoomScreen(props) {
  return (
    <div className="bg-primary h-screen flex items-center">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Meeting is being prepared</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          wait until your interviewer has started the meeting.
        </p>
      </div>
    </div>
  );
}

export default UserWaitingRoomScreen;