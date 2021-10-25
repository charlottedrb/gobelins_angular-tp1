import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

    featureData: FeatureData[]

    constructor() {
        this.featureData = [
            new FeatureData('Business', 'mockup2.png', false),
            new FeatureData('Performance', 'mockup1.png', true)
        ]
    }

    ngOnInit(): void {
    }

}

class FeatureData {
    title: string
    imagePath: string
    pictureRight: boolean

    constructor(title: string, imagePath: string, pictureRight: boolean) {
        this.title = title
        this.imagePath = imagePath
        this.pictureRight = pictureRight
    }
}
