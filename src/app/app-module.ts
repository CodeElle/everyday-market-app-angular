import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './modules/core/core-module';
import { SharedModule } from './modules/shared/shared-module';
import { AppRoutingModule } from './app-routing-module';
import { MarketModule } from './modules/market/market-module';
import { App } from './app';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
];

@NgModule({
  declarations: [
    App
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MarketModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
