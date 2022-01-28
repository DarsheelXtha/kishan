import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrierComponent } from './carrier.component';


const routes: Routes = [
    {
        path: '',
        component: CarrierComponent,
        data:{
            title: 'Carrier'
        }
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CarrierRoutingModule {}