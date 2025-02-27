import React from 'react';
import MembersListProps from './types';
import MemberCard from '../MemberCard/MemberCard';

const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className="h-full overflow-y-hidden">
      <div className="grid grid-rows-2 gap-2 h-full">
        <div className="flex gap-2 w-max h-full overflow-x-auto">
          {members.slice(0, Math.ceil(members.length / 2)).map((member, index) => (
            <div className="h-full aspect-square" key={index}>
              <MemberCard member={member}/>
            </div>
          ))}
        </div>
        <div className="flex gap-2 w-max h-full overflow-x-auto">
          {members.slice(Math.ceil(members.length / 2)).map((member, index) => (
            <div className="h-full aspect-square" key={index}>
              <MemberCard member={member}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersList;