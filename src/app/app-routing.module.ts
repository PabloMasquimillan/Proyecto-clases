import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },

  {
    path: "contactanos",
    component: ContactanosComponent
  },

  {
    path: "ubicanos",
    component: UbicanosComponent
  },
  
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
