"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemon_model_1 = require("./pokemon.model");
var pokemon_service_1 = require("./pokemon-service");
var PokemonDetailComponent = (function () {
    function PokemonDetailComponent(pokemonService, route) {
        this.pokemonService = pokemonService;
        this.route = route;
        this.pokemon = new pokemon_model_1.Pokemon();
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.pokemonService.get(id)
            .then(function (pokemon) { _this.pokemon = pokemon; });
    };
    return PokemonDetailComponent;
}());
PokemonDetailComponent = __decorate([
    core_1.Component({
        selector: "pk-details",
        moduleId: module.id,
        templateUrl: "./pokemon-detail.component.html",
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService, router_1.ActivatedRoute])
], PokemonDetailComponent);
exports.PokemonDetailComponent = PokemonDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBRWpELGlEQUEwQztBQUMxQyxxREFBbUQ7QUFPbkQsSUFBYSxzQkFBc0I7SUFHakMsZ0NBQW9CLGNBQThCLEVBQVUsS0FBcUI7UUFBN0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGakYsWUFBTyxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO0lBRTRELENBQUM7SUFFckYseUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzthQUN4QixJQUFJLENBQUMsVUFBQyxPQUFPLElBQU8sS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLHNCQUFzQjtJQUxsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7S0FDL0MsQ0FBQztxQ0FJb0MsZ0NBQWMsRUFBaUIsdUJBQWM7R0FIdEUsc0JBQXNCLENBV2xDO0FBWFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tIFwiLi9wb2tlbW9uLm1vZGVsXCI7XG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gXCIuL3Bva2Vtb24tc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGstZGV0YWlsc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwb2tlbW9uID0gbmV3IFBva2Vtb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuXG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXQoaWQpXG4gICAgICAudGhlbigocG9rZW1vbikgPT4geyB0aGlzLnBva2Vtb24gPSBwb2tlbW9uOyB9KTtcbiAgfVxufVxuIl19