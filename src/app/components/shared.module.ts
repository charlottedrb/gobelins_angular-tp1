import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {ClientComponent} from './client/client.component';
import {SwitcherComponent} from './switcher/switcher.component';
import {ScrollspyDirective} from './scrollspy.directive';
import {FooterComponent} from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { TeamComponent } from './team/team.component';
import {TeamModule} from "./team/components/team.module";
import {TruncateTextPipe} from "../pipes/truncate-text.pipe";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ClientComponent,
        SwitcherComponent,
        ScrollspyDirective,
        FooterComponent,
        ContactComponent,
        FaqComponent,
        FeaturesComponent,
        PricingComponent,
        ServicesComponent,
        CtaComponent,
        TeamComponent,
        TruncateTextPipe
    ],
    imports: [
        CommonModule,
        CarouselModule,
        ScrollToModule.forRoot(),
        TeamModule,
        ReactiveFormsModule
    ],
    exports: [
        ClientComponent,
        SwitcherComponent,
        ScrollspyDirective,
        FooterComponent,
        ContactComponent,
        FaqComponent,
        FeaturesComponent,
        PricingComponent,
        ServicesComponent,
        CtaComponent,
        TeamComponent,
        TruncateTextPipe
    ]
})
export class SharedModule {
}
