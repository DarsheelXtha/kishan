import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';




@NgModule({
    imports: [
        RouterModule, 
        CommonModule,
        FormsModule, 
        CareerRoutingModule,

    ],
    declarations: [
        CareerComponent
    ],
    providers: []
})
export class CareerModule {
    
}