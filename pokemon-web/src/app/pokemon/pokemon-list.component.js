"use strict";
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../pokemon-common/pokemon-service");
var PokemonList = (function () {
    function PokemonList(pokemonService) {
        this.pokemonService = pokemonService;
    }
    PokemonList.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.list().subscribe(function () { _this.pokemon = _this.pokemonService.allPokemon; }, function (err) { console.log(err); });
    };
    return PokemonList;
}());
PokemonList = __decorate([
    core_1.Component({
        selector: "pk-items",
        moduleId: module.id,
        templateUrl: "./pokemon-list.component.html",
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonList);
exports.PokemonList = PokemonList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBva2Vtb24tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUdsRCxxRUFBbUU7QUFPbkUsSUFBYSxXQUFXO0lBR3RCLHFCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBRXZELDhCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUNsQyxjQUFRLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQ3hELFVBQUMsR0FBRyxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQy9CLENBQUE7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLFdBQVc7SUFMdkIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsK0JBQStCO0tBQzdDLENBQUM7cUNBSW9DLGdDQUFjO0dBSHZDLFdBQVcsQ0FXdkI7QUFYWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCIuLi9wb2tlbW9uLWNvbW1vbi9wb2tlbW9uLm1vZGVsXCI7XG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gXCIuLi9wb2tlbW9uLWNvbW1vbi9wb2tlbW9uLXNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBrLWl0ZW1zXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcG9rZW1vbi1saXN0LmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25MaXN0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcG9rZW1vbjogUG9rZW1vbltdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9rZW1vblNlcnZpY2U6IFBva2Vtb25TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBva2Vtb25TZXJ2aWNlLmxpc3QoKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7IHRoaXMucG9rZW1vbiA9IHRoaXMucG9rZW1vblNlcnZpY2UuYWxsUG9rZW1vbjsgfSxcbiAgICAgIChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKTsgfVxuICAgIClcbiAgfVxufVxuIl19