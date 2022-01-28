import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        AboutUsRoutingModule
    ],
    declarations: [
        AboutUsComponent
    ]
})
export class AboutUsModule {}