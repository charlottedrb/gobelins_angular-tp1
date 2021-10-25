import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    teamData: TeamData[]

    constructor() {
        this.teamData = [
            new TeamData('Donald', 'Laughlin', false, 'team-1.png'),
            new TeamData('Rigoberto', 'Valenza', true, 'team-2.png'),
            new TeamData('Venessa', 'Smith', false, 'team-3.png')
        ]
    }

    ngOnInit(): void {
    }

}

class TeamData {
    firstName: string
    lastName: string
    isActive: boolean
    imagePath: string

    constructor(firstName: string, lastName: string, isActive: boolean, imagePath: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.isActive = isActive
        this.imagePath = imagePath
    }

    public name() {
        return this.firstName + " " + this.lastName
    }
}
