import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Pokemon } from "./pokemon.model";
import { PokemonService } from "./pokemon-service";

@Component({
  selector: "app-details",
  moduleId: module.id,
  templateUrl: "./pokemon-detail.component.html",
})
export class PokemonDetailComponent implements OnInit {
  pokemon = new Pokemon();

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.pokemonService.get(id)
      .then((pokemon) => { this.pokemon = pokemon; });
  }
}