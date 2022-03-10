import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailShowComponentComponent } from './Component/email-show-component/email-show-component.component';

const routes: Routes = [
  { path: "email", component: EmailShowComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
