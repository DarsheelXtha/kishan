import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './carrier.component';




@NgModule({
    imports: [
        RouterModule, 
        CommonModule,
        FormsModule, 
        CarrierRoutingModule,

    ],
    declarations: [
        CarrierComponent
    ],
    providers: []
})
export class CarrierModule {
    
}