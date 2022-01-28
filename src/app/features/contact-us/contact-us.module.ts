import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ContactUsRoutingModule,
    ], 
    declarations: [
        ContactUsComponent
    ], 
    providers :[]
})
export class ContactUsModule {}