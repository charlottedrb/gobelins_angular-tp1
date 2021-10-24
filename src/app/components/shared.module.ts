import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {ClientComponent} from '../pages/home-page/components/client/client.component';
import {FaqComponent} from '../pages/home-page/components/faq/faq.component';
import {SwitcherComponent} from '../pages/home-page/components/switcher/switcher.component';
import {ScrollspyDirective} from './scrollspy.directive';

@NgModule({
  declarations: [
    ClientComponent,
    FaqComponent,
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
    FaqComponent,
    SwitcherComponent,
    ScrollspyDirective
  ]
})
export class SharedModule {
}
