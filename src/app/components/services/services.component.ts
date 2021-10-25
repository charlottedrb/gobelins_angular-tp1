import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    serviceData: ServiceData[]

    constructor() {
        this.serviceData = [
            new ServiceData("Digital Design", 'ti-settings'),
            new ServiceData("Unlimited Colors", 'ti-palette'),
            new ServiceData("Strategy Solutions", 'ti-stats-up'),
            new ServiceData("Awesome Support", 'ti-package'),
            new ServiceData("Truly Multipurpose", 'ti-dashboard'),
            new ServiceData("Easy to customize", 'ti-headphone')
        ]
    }

    ngOnInit(): void {
    }

}

class ServiceData {
    title: string
    icon: string

    constructor(title: string, icon: string) {
        this.title = title
        this.icon = icon
    }
}
