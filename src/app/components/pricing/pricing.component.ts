import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

    pricingData: PricingData[]

    constructor() {
        this.pricingData = [
            new PricingData('$29', '1GB', '50MB', 'No', 1),
            new PricingData('$59', '2GB', '500MB', 'Yes', 5),
            new PricingData('$79', '4GB', '1GB', 'Yes', 10)
        ]
    }

    ngOnInit(): void {
    }

}

class PricingData {
    price: string
    bandWidth: string
    space: string
    support: string
    domain: number

    constructor(
        price: string,
        bandWidth: string,
        space: string,
        support: string,
        domain: number
    ) {
        this.price = price
        this.bandWidth = bandWidth
        this.space = space
        this.support = support
        this.domain = domain
    }
}
