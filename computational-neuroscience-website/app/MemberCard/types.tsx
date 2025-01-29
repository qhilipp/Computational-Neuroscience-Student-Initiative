export class Member {
    name: string;
    tag?: string;
    linkedIn?: string;
    gitHub?: string;
    image?: string;

    constructor(name: string, tag?: string, linkedIn?: string, gitHub?: string, image?: string) {
        this.name = name;
        this.tag = tag;
        this.linkedIn = linkedIn;
        this.gitHub = gitHub;
        this.image = image;
    }

    private getGitHubImageUrl(): string | null {
        if(!this.gitHub) return null;
        return !this.gitHub + ".png";
    }

    getImage(): string {
        return this.image || this.getGitHubImageUrl() || "https://wallpapers.com/images/hd/placeholder-profile-icon-8qmjk1094ijhbem9.jpg";
    }
}