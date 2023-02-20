import { TicketsComponent } from './../../../ComtestNetworks_Server/Client/comtest-client-app/src/app/components/tickets/tickets.component';
import { TestNestComponent } from './components/test-nest/test-nest.component';
import { EditETRComponent } from './components/tickets/edit-etr/edit-etr.component';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { TicketInfoComponent } from './components/tickets/ticket-info/ticket-info.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/tickets/ticket-list/ticket-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'allTickets', component: TicketListComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'editTicket/:id', component: TicketInfoComponent},
  { path: 'tree', component: TreeComponentComponent},
  { path: 'editETR/:id', component: EditETRComponent},
  { path: 'test', component: TestNestComponent},
  { path: 'tickets/:id', component: TicketsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
