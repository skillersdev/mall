import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './services/common.service';
import { TopnavComponent } from './topnav/topnav.component';

import { MalllistComponent } from './pages/malllist.component';
import { ShoplistComponent } from './pages/shoplist.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    MalllistComponent,
    ShoplistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
