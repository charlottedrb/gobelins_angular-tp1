import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})

/**
 * Switcher component
 */
export class SwitcherComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  windowScroll() {
    // FIXME

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
  /**
   * Onclick color change
   * @param theme theme color
   */
  setTheme(theme : string) {
    // @ts-ignore
    document
      .getElementById('color-opt')
      .setAttribute('href', 'assets/css/colors/' + theme + '.css');
  }

  toggleSwitcher() {
    this.isVisible = !this.isVisible;
  }

}
