import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PokemonListComponent } from "./pokemon/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";

const routes: Routes = [
  { path: "", component: PokemonListComponent },
  { path: "details/:id", component: PokemonDetailComponent }
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ]
})
export class AppRoutingModule { }
