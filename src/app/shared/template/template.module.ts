import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    exports: [
        CommonModule,
        HeaderComponent,
        FooterComponent,
        SharedModule,
        FormsModule
    ],
    imports: [
        CommonModule,
        RouterModule,
        // SharedModule,
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ], 
    providers: [
        
    ]
})
export class TemplateModule { }