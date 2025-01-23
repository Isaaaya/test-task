import React from 'react'
import { ClearFilterButton } from 'components';
import useRoomsFilter from 'hooks/useRoomsFilter';

const RoomsFilter = () => {
  const { rooms, handleClick, handleClear } = useRoomsFilter();

  return (
    <div className='space-y-2'>
      <p className='font-medium'>
        Rooms:
      </p>
      <div className='flex items-center gap-5'>
        {[1, 2, 3].map((roomsNum) => (
          <button
            key={roomsNum}
            onClick={() => handleClick(roomsNum)}
            className='flex items-center justify-center h-auto px-2 py-1 border rounded'
            style={{ backgroundColor: rooms === roomsNum ? 'gray' : '' }}
          >
            {roomsNum}
          </button>
        ))}
        <ClearFilterButton onClick={handleClear} />
      </div>
    </div>
  );
};

export default RoomsFilter;
