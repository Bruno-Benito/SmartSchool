import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {path: '',redirectTo:'dashbord', pathMatch: 'full'},
  {path: 'professores',component: ProfessoresComponent,},
  {path: 'alunos',component: AlunosComponent,},
  {path: 'perfil',component: PerfilComponent,},
  {path: 'dashbord',component: DashbordComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
