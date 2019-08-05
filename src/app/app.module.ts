import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FotosLindasComponent } from './fotos-lindas/fotos-lindas.component';
import { EstudiarComponent } from './estudiar/estudiar.component';
import { KejestoComponent } from './kejesto/kejesto.component';
import { RoutingModule } from './routing';
import { PremioComponent } from './premio/premio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotosLindasComponent,
    EstudiarComponent,
    KejestoComponent,
    PremioComponent
  ],
  imports: [
    BrowserModule, 
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
