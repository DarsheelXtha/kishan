import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes =[
    {
        path: 'home',
        loadChildren: () => import('../../features/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'services',
        loadChildren: () => import ('../../features/services/services.module').then(m => m.ServicesModule),
    },
    {
        path: 'about',
        loadChildren: () => import ('../../features/about-us/about-us.module').then(m => m.AboutUsModule),
    },
    {
        path: 'career',
        loadChildren: () => import ('../../features/career/career.module').then(m => m.CareerModule),
    },
    {
        path: 'contactus',
        loadChildren: () => import ('../../features/contact-us/contact-us.module').then(m => m.ContactUsModule),
    }
];