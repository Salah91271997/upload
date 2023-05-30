import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NumberFormComponent } from './number-form/number-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'number-form', component: NumberFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
