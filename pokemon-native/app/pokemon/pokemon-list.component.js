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
        templateUrl: "./pokemon-list.component.html",
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonListComponent);
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBva2Vtb24tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUdsRCxxREFBbUQ7QUFPbkQsSUFBYSxvQkFBb0I7SUFHL0IsOEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFdkQsdUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7YUFDdkIsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUNaLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsK0JBQStCO0tBQzdDLENBQUM7cUNBSW9DLGdDQUFjO0dBSHZDLG9CQUFvQixDQVdoQztBQVhZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCIuL3Bva2Vtb24ubW9kZWxcIjtcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSBcIi4vcG9rZW1vbi1zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJway1pdGVtc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Bva2Vtb24tbGlzdC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQb2tlbW9uTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBva2Vtb246IFBva2Vtb25bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5saXN0KClcbiAgICAgIC50aGVuKChwb2tlbW9uKSA9PiB7XG4gICAgICAgIHRoaXMucG9rZW1vbiA9IHBva2Vtb247XG4gICAgICB9KTtcbiAgfVxufVxuIl19