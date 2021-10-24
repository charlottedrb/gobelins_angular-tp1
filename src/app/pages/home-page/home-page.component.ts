import { Component} from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent  {

  constructor() {  }

  currentSection = 'home-page';

   public windowScroll() :void{
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      // @ts-ignore
      document.getElementById('navbar').style.backgroundColor = '#1a1a1a';
      // @ts-ignore
      document.getElementById('navbar').style.padding = '15px 0px';
    } else {
      // @ts-ignore
      document.getElementById('navbar').style.backgroundColor = '';
      // @ts-ignore
      document.getElementById('navbar').style.padding = '20px';
    }
  }


  public toggleMenu(): void {
    // @ts-ignore
    document.getElementById('navbarCollapse').classList.toggle('show');
  }


  public onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }

}
