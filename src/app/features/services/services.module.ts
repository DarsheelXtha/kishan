import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, 
        ServicesRoutingModule,
    ],
    declarations:[
        ServicesComponent,
    ], 
    providers: []
})
export class ServicesModule { }