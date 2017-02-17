"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
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
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            app_routing_module_1.AppRoutingModule,
            nativescript_module_1.NativeScriptModule,
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
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsa0RBQW1FO0FBRW5FLGlEQUErQztBQUMvQywyREFBd0Q7QUFFeEQsMkVBQXdFO0FBQ3hFLCtFQUE0RTtBQUM1RSw2REFBMkQ7QUF1QjNELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQXJCckIsZUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1QsNEJBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLHFDQUFnQjtZQUNoQix3Q0FBa0I7WUFDbEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWiw2Q0FBb0I7WUFDcEIsaURBQXNCO1NBQ3ZCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsZ0NBQWM7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBQb2tlbW9uTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3Bva2Vtb24vcG9rZW1vbi1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUG9rZW1vbkRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3Bva2Vtb24vcG9rZW1vbi1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gXCIuL3Bva2Vtb24vcG9rZW1vbi1zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgUG9rZW1vbkxpc3RDb21wb25lbnQsXG4gICAgUG9rZW1vbkRldGFpbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBQb2tlbW9uU2VydmljZVxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==