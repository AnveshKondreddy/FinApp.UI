import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CalendarModule } from 'primeng/calendar'
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MemberComponent } from './member/member.component';
import{TableModule} from 'primeng/table';
import {DataTable, DataTableModule} from 'primeng/datatable';
import{ButtonModule} from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path: 'members', component: MemberComponent },
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    MenubarModule,
    CalendarModule,TableModule,DataTableModule,ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
