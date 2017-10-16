import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropetiesComponent } from './output-propeties/output-propeties.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    DataBindingComponent,
    InputPropertiesComponent,
    OutputPropetiesComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule

  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
