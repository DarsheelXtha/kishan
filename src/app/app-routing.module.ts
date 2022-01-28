import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './shared/layout/common-layout/common-layout.component';
import { CommonLayout_ROUTES } from './shared/routes/common-layout.routes';
import { FullLayout_ROUTES } from './shared/routes/full-layout.routes';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common'; 

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CommonLayoutComponent, 
    children: CommonLayout_ROUTES
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: FullLayout_ROUTES
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],  

  providers: [{provide: LocationStrategy,useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
