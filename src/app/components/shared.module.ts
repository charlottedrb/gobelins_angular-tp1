import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {ClientComponent} from './client/client.component';
import {SwitcherComponent} from './switcher/switcher.component';
import {ScrollspyDirective} from './scrollspy.directive';
import {FooterComponent} from './footer/footer.component';

@NgModule({
    declarations: [
        ClientComponent,
        SwitcherComponent,
        ScrollspyDirective,
        FooterComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        ScrollToModule.forRoot()
    ],
    exports: [
        ClientComponent,
        SwitcherComponent,
        ScrollspyDirective,
        FooterComponent,
    ]
})
export class SharedModule {
}
