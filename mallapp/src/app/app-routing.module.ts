import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalllistComponent } from './pages/malllist.component';
import { ShoplistComponent } from './pages/shoplist.component';

const routes: Routes = [ {
  path: '',
  component: MalllistComponent
},{
  path: 'shop/:id',
  component: ShoplistComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
