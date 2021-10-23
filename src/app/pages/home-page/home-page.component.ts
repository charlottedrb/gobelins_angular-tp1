import {AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {

  constructor() { }

  currentSection = 'home-page';

  ngAfterViewInit(): void {
    // FIXME updateref + binding
    let i = 1;
    setInterval(() => {
      if (i === 1) { // @ts-ignore
        document.getElementById('text').innerHTML = 'We love make things amazing and simple'; }
      else if (i === 2) { // @ts-ignore
        document.getElementById('text').innerHTML = 'Create amazing landing page with Globing'; }
      else { // @ts-ignore
        document.getElementById('text').innerHTML = 'Perfect solution for small businesses'; }
      if (i >= 3) { i = 0; }
      i++;
    }, 2500);


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
