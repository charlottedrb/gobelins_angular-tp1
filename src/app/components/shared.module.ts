import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {ClientComponent} from '../pages/home-page/components/client/client.component';
import {SwitcherComponent} from '../pages/home-page/components/switcher/switcher.component';
import {ScrollspyDirective} from './scrollspy.directive';

@NgModule({
  declarations: [
    ClientComponent,
    SwitcherComponent,
    ScrollspyDirective
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    ClientComponent,
    SwitcherComponent,
    ScrollspyDirective
  ]
})
export class SharedModule {
}
