import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.scss']
})

export class SwitcherComponent {
    // autre méthode pour le toggle
    // isVisible: boolean

    // en utilisant un objet Theme, on évite les erreurs d'ordre des thèmes pour l'HTML (class='color1'...)
    themes: Theme[] = [
        new Theme(1, 'default'),
        new Theme(2, 'pink'),
        new Theme(3, 'yellow'),
        new Theme(4, 'green'),
        new Theme(5, 'purple'),
        new Theme(6, 'light-blue'),
    ]

    constructor(@Inject(DOCUMENT) private readonly document: Document) {}

    public windowScroll(): void {
        const html = document.getElementById("back-to-top")
        if(!html) return

        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            // @ts-ignore
            html.style.display = "inline";
        } else {
            // @ts-ignore
            html.style.display = "none";
        }
    }

    public toggleSettings(): void {
        const html = document.querySelector('#style-switcher')
        if(!html) return

        html.classList.toggle('active')

        // autre méthode
        // this.isVisible = !this.isVisible
    }

    public setTheme(theme: string): void {
        const html = document.getElementById('color-opt')
        if(!html) return
        html.setAttribute('href', 'assets/css/colors/' + theme + '.css')
    }
}

class Theme {
    colorId: number
    name: string

    constructor(colorId: number, name: string) {
        this.colorId = colorId
        this.name = name
    }
}
