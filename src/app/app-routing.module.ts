import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch: "full"},
  {path:"login", component: LoginComponent},
  //{path: "index", component: IndexComponent},
  {path: "admin", component: IndexComponent, children: [ 
    {path: "pessoas", component: PessoaListComponent},
    {path: "pessoas/novo", component: PessoaDetailComponent},
    {path: "pessoas/editar:id", component: PessoaDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
