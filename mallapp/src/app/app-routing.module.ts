import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalllistComponent } from './pages/malllist.component';
import { ShoplistComponent } from './pages/shoplist.component';
import {AllMallsComponent } from './pages/allMalls.component';
import { FloorPageComponent } from "./pages/floorPage.component";
import { ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [ 
  {
    path: '',
    component: AllMallsComponent
  },{
    path: 'mall/:id',
    component: MalllistComponent
  },{
    path: 'mall/:id/floor/:floorid/shop/:shopid',
    //path: 'shop/:id',
  component: ShoplistComponent
  },
  {
    path: 'mall/:id/floor/:floorid',
    component: FloorPageComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
