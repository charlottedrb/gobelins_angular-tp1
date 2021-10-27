import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    serviceData: ServiceData[]
    @Output() changeTitleEvent = new EventEmitter()

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

    public emitChangeTitle(event: string) {
        this.changeTitleEvent.emit(event)
        console.log('ServicesComponent emitChangeTitle')
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
