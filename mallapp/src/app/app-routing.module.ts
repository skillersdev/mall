import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoplistComponent } from './pages/shoplist.component';

const routes: Routes = [ {
  path: '',
  component: ShoplistComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
