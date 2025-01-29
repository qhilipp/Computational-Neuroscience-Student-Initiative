import { Member } from "./types";

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className="w-60 h-72 rounded-lg overflow-hidden relative">
      <img
        src={member.getImage()}
        alt={`${member.name}'s profile`}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          {member.tag && (
            <span className="text-sm text-white/90 bg-black/20 px-2 py-1 rounded">
              {member.tag}
            </span>
          )}
        </div>
        
        <div className="flex gap-3 mt-2">
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
          )}
          {member.gitHub && (
            <a
              href={member.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;