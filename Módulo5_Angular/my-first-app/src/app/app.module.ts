// Todo componenete deve estar declarado aqui 
// para dizer que ele existe

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.components';
import { ComponentsByTerminalComponent } from './components-by-terminal/components-by-terminal.component';
import { WaningAlertComponent } from './waning-alert/waning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';


@NgModule({
  declarations: [
    //Para o angular entender que determinada classe é um componente, tem que tá aqui dentro
    AppComponent,
    ServerComponent,
    ComponentsByTerminalComponent,
    WaningAlertComponent,
    SuccessAlertComponent,
    GameControlComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
