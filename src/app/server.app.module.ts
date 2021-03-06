import { NgModule }                from '@angular/core';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { HomeModule }              from './views/home/home.module';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleMapLoaderModule }   from '@nguniversal/module-map-ngfactory-loader';

import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-pwa'
    }),
    BrowserAnimationsModule,
    ServerModule,
    ServerTransferStateModule,
    HomeModule,
    AppRoutingModule,
    ModuleMapLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ServerAppModule { }
