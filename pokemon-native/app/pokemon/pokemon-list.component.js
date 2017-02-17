"use strict";
var core_1 = require("@angular/core");
var pokemon_service_1 = require("./pokemon-service");
var PokemonListComponent = (function () {
    function PokemonListComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.list()
            .then(function (pokemon) {
            _this.pokemon = pokemon;
        });
    };
    return PokemonListComponent;
}());
PokemonListComponent = __decorate([
    core_1.Component({
        selector: "pk-items",
        moduleId: module.id,
        templateUrl: "./pokemon-list.component.html"
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonListComponent);
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBva2Vtb24tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUdsRCxxREFBbUQ7QUFPbkQsSUFBYSxvQkFBb0I7SUFHL0IsOEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFdkQsdUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7YUFDdkIsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUNaLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsK0JBQStCO0tBQzdDLENBQUM7cUNBSW9DLGdDQUFjO0dBSHZDLG9CQUFvQixDQVdoQztBQVhZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCIuL3Bva2Vtb24ubW9kZWxcIjtcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSBcIi4vcG9rZW1vbi1zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJway1pdGVtc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Bva2Vtb24tbGlzdC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcG9rZW1vbjogUG9rZW1vbltdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9rZW1vblNlcnZpY2U6IFBva2Vtb25TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBva2Vtb25TZXJ2aWNlLmxpc3QoKVxuICAgICAgLnRoZW4oKHBva2Vtb24pID0+IHtcbiAgICAgICAgdGhpcy5wb2tlbW9uID0gcG9rZW1vbjtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=