import {Model} from "./interfaces/model";

export class TeamMemberLinks implements Model{
    github: string
    skype: string
    twitter: string

    constructor(input: Partial<TeamMemberLinks>) {
        this.github = input.github || ''
        this.skype = input.skype || ''
        this.twitter = input.twitter || ''
    }
}
