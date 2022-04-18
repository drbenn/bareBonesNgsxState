import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeComponent } from './change/change.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: 'change', component: ChangeComponent },
  { path: 'display', component: DisplayComponent },
  { path: '', redirectTo: '/change', pathMatch: 'full' },
  { path: '**', component: ChangeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
