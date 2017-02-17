import { Component, OnInit } from "@angular/core";

import { Pokemon } from "./pokemon.model";
import { PokemonService } from "./pokemon-service";

@Component({
  selector: "pk-items",
  moduleId: module.id,
  templateUrl: "./pokemon-list.component.html"
})
export class PokemonListComponent implements OnInit {
  pokemon: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.list()
      .then((pokemon) => {
        this.pokemon = pokemon;
      });
  }
}
