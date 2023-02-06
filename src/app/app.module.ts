import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses/courses-details/courses-details.component';
import { AdminComponent } from './examples/child-routes/admin.component';
import { AdminPayrollComponent } from './examples/child-routes/payroll/payroll.component';
import { AdminVacationComponent } from './examples/child-routes/vacation/vacation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesListComponent,
    CoursesDetailsComponent,
    AdminComponent,
    AdminPayrollComponent,
    AdminVacationComponent,
    ExamplesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
