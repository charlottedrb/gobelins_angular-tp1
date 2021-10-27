import {TeamMemberLinks} from "./team-member-links";
import {Model} from "./interfaces/model";

export class TeamMember implements Model{
    readonly img: string
    readonly name: string
    readonly text: string
    readonly isActive?: boolean
    readonly links: TeamMemberLinks

    constructor(input: Partial<TeamMember>) {
        this.img = input.img || ''
        this.name = input.name || ''
        this.text = input.text || ''
        this.links = new TeamMemberLinks(input.links || {})
        this.isActive = input.isActive || false
    }
}
