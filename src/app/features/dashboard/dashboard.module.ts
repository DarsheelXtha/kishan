import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent,
        
    ], 
    providers: []
})
export class DashboardModule {}