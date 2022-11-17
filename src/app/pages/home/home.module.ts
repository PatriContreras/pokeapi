import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewFormComponent } from 'src/app/shared/components/new-form/new-form.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ListComponent } from 'src/app/shared/components/list/list.component';



@NgModule({
  declarations: [HomeComponent, NewFormComponent, TableComponent, ListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
