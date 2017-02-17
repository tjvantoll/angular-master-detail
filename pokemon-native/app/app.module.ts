import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { PokemonListComponent } from "./pokemon/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";
import { PokemonService } from "./pokemon/pokemon-service";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptHttpModule
  ],
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  providers: [
    PokemonService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
