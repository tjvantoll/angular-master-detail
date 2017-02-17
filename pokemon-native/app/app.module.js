"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var pokemon_list_component_1 = require("./pokemon/pokemon-list.component");
var pokemon_detail_component_1 = require("./pokemon/pokemon-detail.component");
var pokemon_service_1 = require("./pokemon/pokemon-service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            app_routing_module_1.AppRoutingModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            pokemon_list_component_1.PokemonListComponent,
            pokemon_detail_component_1.PokemonDetailComponent
        ],
        providers: [
            pokemon_service_1.PokemonService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUd6QyxvREFBcUU7QUFDckUsa0RBQW1FO0FBRW5FLGlEQUErQztBQUMvQywyREFBd0Q7QUFFeEQsMkVBQXdFO0FBQ3hFLCtFQUE0RTtBQUM1RSw2REFBMkQ7QUFrQjNELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQWhCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUNBQWdCO1lBQ2hCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7U0FDdkI7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLDZDQUFvQjtZQUNwQixpREFBc0I7U0FDdkI7UUFDRCxTQUFTLEVBQUU7WUFDVCxnQ0FBYztTQUNmO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcblxuaW1wb3J0IHsgUG9rZW1vbkxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wb2tlbW9uL3Bva2Vtb24tbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBva2Vtb25EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wb2tlbW9uL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UgfSBmcm9tIFwiLi9wb2tlbW9uL3Bva2Vtb24tc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBQb2tlbW9uTGlzdENvbXBvbmVudCxcbiAgICBQb2tlbW9uRGV0YWlsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFBva2Vtb25TZXJ2aWNlXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19