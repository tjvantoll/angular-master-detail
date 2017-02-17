"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemon_model_1 = require("../pokemon-common/pokemon.model");
var pokemon_service_1 = require("../pokemon-common/pokemon-service");
var PokemonDetailComponent = (function () {
    function PokemonDetailComponent(pokemonService, route) {
        this.pokemonService = pokemonService;
        this.route = route;
        this.pokemon = new pokemon_model_1.Pokemon();
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params["id"];
        this.pokemonService.get(id).subscribe(function (data) { _this.pokemon = _this.pokemonService.lastPokemon; }, function (err) { console.log(err); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBRWpELGlFQUEwRDtBQUMxRCxxRUFBbUU7QUFPbkUsSUFBYSxzQkFBc0I7SUFHakMsZ0NBQW9CLGNBQThCLEVBQVUsS0FBcUI7UUFBN0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGakYsWUFBTyxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO0lBRTRELENBQUM7SUFFckYseUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNuQyxVQUFDLElBQUksSUFBTyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUM3RCxVQUFDLEdBQUcsSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMvQixDQUFDO0lBQ0osQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxzQkFBc0I7SUFMbEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsaUNBQWlDO0tBQy9DLENBQUM7cUNBSW9DLGdDQUFjLEVBQWlCLHVCQUFjO0dBSHRFLHNCQUFzQixDQWFsQztBQWJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSBcIi4uL3Bva2Vtb24tY29tbW9uL3Bva2Vtb24ubW9kZWxcIjtcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3Bva2Vtb24tY29tbW9uL3Bva2Vtb24tc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGstZGV0YWlsc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwb2tlbW9uID0gbmV3IFBva2Vtb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcblxuICAgIHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0KGlkKS5zdWJzY3JpYmUoXG4gICAgICAoZGF0YSkgPT4geyB0aGlzLnBva2Vtb24gPSB0aGlzLnBva2Vtb25TZXJ2aWNlLmxhc3RQb2tlbW9uOyB9LFxuICAgICAgKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpOyB9XG4gICAgKTtcbiAgfVxufVxuIl19