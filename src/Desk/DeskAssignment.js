import React from 'react';
import Assignment from './Actions/Assignment';
import Deassign from './Actions/Deassign';


const DeskAssignment = () => {
  return (
   <div className='assignment-wrapper'>
   <Assignment />
   <Deassign />
   </div>
  );
};

export default DeskAssignment;
