import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full'},
  { path: 'allTickets', component: TicketListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
