import React from 'react';
import MembersListProps from './types';
import { Member } from './types';

const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-wrap gap-2 w-max pb-2">
        {members.map((member, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white">
            {member.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MembersList;