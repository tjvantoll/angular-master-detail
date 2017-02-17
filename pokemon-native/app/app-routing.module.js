"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var pokemon_list_component_1 = require("./pokemon/pokemon-list.component");
var pokemon_detail_component_1 = require("./pokemon/pokemon-detail.component");
var routes = [
    { path: "", component: pokemon_list_component_1.PokemonListComponent },
    { path: "details/:id", component: pokemon_detail_component_1.PokemonDetailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot(routes)
        ],
        exports: [
            router_1.NativeScriptRouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLDJFQUF3RTtBQUN4RSwrRUFBNEU7QUFFNUUsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtJQUM3QyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO0NBQzNELENBQUM7QUFVRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQVI1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCO1NBQ3pCO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUG9rZW1vbkxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wb2tlbW9uL3Bva2Vtb24tbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBva2Vtb25EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wb2tlbW9uL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFBva2Vtb25MaXN0Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCJkZXRhaWxzLzppZFwiLCBjb21wb25lbnQ6IFBva2Vtb25EZXRhaWxDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19