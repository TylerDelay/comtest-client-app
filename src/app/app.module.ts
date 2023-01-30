import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TicketListComponent } from './components/tickets/ticket-list/ticket-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import { HeaderComponent } from './components/header/header.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketInfoComponent } from './components/tickets/ticket-info/ticket-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    HeaderComponent,
    TicketsComponent,
    TicketDetailsComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    TicketInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatTreeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
