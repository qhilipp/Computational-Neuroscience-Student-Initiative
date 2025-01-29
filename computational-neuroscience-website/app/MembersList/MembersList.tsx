import React from 'react';
import MembersListProps from './types';
import MemberCard from '../MemberCard/MemberCard';

const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className="overflow-x-auto h-64">
  <div className="flex flex-nowrap gap-2 w-max pb-2 h-full">
    {members.map((member, index) => (
      <MemberCard member={member} key={index}/>
    ))}
  </div>
</div>
  );
};

export default MembersList;