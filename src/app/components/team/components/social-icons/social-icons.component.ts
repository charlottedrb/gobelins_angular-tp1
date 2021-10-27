import {Component, Input, OnInit} from '@angular/core';
import {TeamMemberLinks} from "../../../../models/team-member-links";

@Component({
    selector: 'social-icons',
    templateUrl: './social-icons.component.html',
    styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {

    @Input() socialLinks: TeamMemberLinks

    constructor() { }

    ngOnInit(): void {
    }

}
