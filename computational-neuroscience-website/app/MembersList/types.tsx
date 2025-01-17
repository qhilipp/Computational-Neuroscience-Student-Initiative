interface MembersListProps {
    members: Member[];
}

export class Member {
    name: String;
    linkedIn: String;
    gitHub: String;

    constructor(name: String, linkedIn: String, gitHub: String) {
        this.name = name;
        this.linkedIn = linkedIn;
        this.gitHub = gitHub;
    }
}

export default MembersListProps;