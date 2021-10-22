import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index4',
  templateUrl: './index4.component.html',
  styleUrls: ['./index4.component.scss']
})

/**
 * Index-4 component
 */
export class Index4Component implements OnInit {

  constructor() { }

  currentSection = 'home';

  ngOnInit(): void {
    // FIXME updateref + binding
    /*
    let i = 1;
    setInterval(() => {


      // tslint:disable-next-line: max-line-length
      if (i === 1) { document.getElementById('text').innerHTML = 'We love make things amazing and simple'; }
      else if (i === 2) { document.getElementById('text').innerHTML = 'Create amazing landing page with Globing'; }
      else { document.getElementById('text').innerHTML = 'Perfact solution for small businesses'; }
      if (i >= 3) { i = 0; }
      i++;

    }, 2500);
    */

  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    // FIXME
    if(!navbar) return;

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = '#1a1a1a';
      navbar.style.padding = '15px 0px';
    }
    else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
    }
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
   // FIXME
    const navbarCollapse = document.getElementById('navbar');
    if(navbarCollapse) navbarCollapse.classList.toggle('show');
    //document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

}
