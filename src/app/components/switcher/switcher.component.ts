import {Component} from '@angular/core';

@Component({
    selector: 'switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.scss']
})

export class SwitcherComponent {
    // autre méthode pour le toggle
    // isVisible: boolean

    public windowScroll(): void {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            // @ts-ignore
            document.getElementById("back-to-top").style.display = "inline";
        } else {
            // @ts-ignore
            document.getElementById("back-to-top").style.display = "none";
        }
    }

    public toggleSettings(): void {
        // @ts-ignore
        document.querySelector('#style-switcher').classList.toggle('active')

        // autre méthode
        // this.isVisible = !this.isVisible
    }

    public setTheme(theme: string): void {
        // @ts-ignore
        document.getElementById('color-opt').setAttribute('href', 'assets/css/colors/' + theme + '.css')
    }
}
