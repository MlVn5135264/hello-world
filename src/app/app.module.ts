import { NgModule, TestabilityRegistry } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { helloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    helloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
