import { NgModule, TestabilityRegistry } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { helloWorldComponent } from './hello-world.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { FormsModule
 } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    helloWorldComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
