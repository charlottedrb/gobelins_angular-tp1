import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    year = new Date().getFullYear()

    showText1 = true
    showText2 = true
    showText3 = false

    text1 = "Terms & Condition"
    text2 = "Privacy policy"
    text3 = "Contact us"

    constructor() {
    }

    ngOnInit(): void {
    }

}
