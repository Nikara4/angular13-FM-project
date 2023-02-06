import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './examples/child-routes/admin.component';
import { AdminPayrollComponent } from './examples/child-routes/payroll/payroll.component';
import { AdminVacationComponent } from './examples/child-routes/vacation/vacation.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      // { path: 'create', component: DynamicComponent },
      // { path: 'input', component: CustomInputComponent },
      {
        path: 'child',
        component: AdminComponent,
        children: [
          { path: 'payroll', component: AdminPayrollComponent },
          { path: 'vacation', component: AdminVacationComponent },
        ],
      },
      // {
      //   path: 'lazy',
      //   loadChildren: () =>
      //     import('./examples/lazy-module/lazy-module.module').then(
      //       (m) => m.LazyModule
      //     ),
      // },
      // { path: 'params', component: RouteParamsComponent },
      // { path: 'params/:id', component: RouteParamsComponent },
      // {
      //   path: 'protected',
      //   component: ProtectedComponent,
      //   canActivate: [AuthGuard],
      // },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
