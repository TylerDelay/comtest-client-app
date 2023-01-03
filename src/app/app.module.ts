import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TicketListComponent } from './components/tickets/ticket-list/ticket-list.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button'
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from './components/header/header.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    HeaderComponent,
    TicketsComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
