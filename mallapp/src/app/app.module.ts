import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './services/common.service';
import { TopnavComponent } from './topnav/topnav.component';

import {AllMallsComponent } from './pages/allMalls.component';
import { MalllistComponent } from './pages/malllist.component';
import { ShoplistComponent } from './pages/shoplist.component';
import { FloorPageComponent } from "./pages/floorPage.component";
import { ContactusComponent } from './pages/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    AllMallsComponent,
    MalllistComponent,
    ShoplistComponent,
    FloorPageComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
