import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'cta',
    templateUrl: './cta.component.html',
    styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {
    @Output() toggleSocialLinksEvent = new EventEmitter<boolean>()
    toggleValue: boolean

    constructor() {
        this.toggleValue = false
    }

    ngOnInit(): void {
    }

    emitToggleSocialLinksEvent(value: boolean) {
        this.toggleValue = !this.toggleValue
        this.toggleSocialLinksEvent.emit(this.toggleValue)
    }
}
