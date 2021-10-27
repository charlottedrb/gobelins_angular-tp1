import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit, OnChanges {

    featureData: FeatureData[]
    @Input() title: string

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
        this.featureData = [
            new FeatureData('Business', 'mockup2.png', false),
            new FeatureData('Performance', 'mockup1.png', true)
        ]
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges()
    }

    ngOnChanges() {
        this.changeDetectorRef.detectChanges()
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
