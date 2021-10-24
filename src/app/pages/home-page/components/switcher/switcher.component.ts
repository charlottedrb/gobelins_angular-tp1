import {Component} from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})

export class SwitcherComponent {

  public windowScroll() :void {
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


}
