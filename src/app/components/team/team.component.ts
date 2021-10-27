import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TeamMember} from "../../models/team-member";
import {TeamMemberLinks} from "../../models/team-member-links";

@Component({
    selector: 'team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    // teamData: TeamData[]
    teamMemberList: TeamMember[]

    constructor() {
        this.teamMemberList = [
            new TeamMember({
                img: "../../../../../assets/images/team/team-3.png",
                name: "@Donald Laughlin",
                text: "You want customer to your store. Easily your coupans and has Clooger.",
                isActive: true,
                links: new TeamMemberLinks({
                    github: '',
                    skype: '',
                    twitter: ''
                })
            }),
            new TeamMember({
                img: "../../../../../assets/images/team/team-2.png",
                name: "@Rigoberto Valenza",
                text: "You want customer to your store. Easily your coupans and has Clooger.",
                links: new TeamMemberLinks({
                    github: '',
                    skype: '',
                    twitter: ''
                })
            }),
            new TeamMember({
                img: "../../../../../assets/images/team/team-1.png",
                name: "@Venessa Smith",
                text: "You want customer to your store. Easily your coupans and has Clooger.",
                isActive: true,
                links: new TeamMemberLinks({
                    github: '',
                    skype: '',
                    twitter: ''
                })
            })
        ]
    }

    ngOnInit(): void {
    }

}
