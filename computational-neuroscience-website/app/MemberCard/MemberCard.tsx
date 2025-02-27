import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { Member } from "./types";

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden relative">
      <img
        src={member.getImage()}
        alt={`${member.name}'s profile`}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          <h3 className="text-md font-semibold text-white">{member.name}</h3>
        </div>
        
        <div className="flex items-center gap-2 mt-1">
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FaLinkedin />
            </a>
          )}
          {member.gitHub && (
            <a
              href={member.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub />
            </a>
          )}
          {member.stackOverflow && (
            <a
              href={member.stackOverflow}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 transition-colors"
            >
              <FaStackOverflow />
            </a>
          )}
          {member.tag && (
            <span style={{ 
              color: 'white', 
              backgroundColor: 'black', 
              padding: '4px 10px',
              borderRadius: '9999px',
              fontSize: '0.7rem',
              fontWeight: 'semibold'
            }}>
              {member.tag}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;