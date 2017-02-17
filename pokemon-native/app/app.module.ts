import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { PokemonListComponent } from "./pokemon/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";
import { PokemonService } from "./pokemon/pokemon-service";

@NgModule({
  imports: [
    AppRoutingModule,
    NativeScriptFormsModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
