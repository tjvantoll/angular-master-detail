"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var pokemon_model_1 = require("./pokemon.model");
var PokemonService = (function () {
    function PokemonService(http) {
        this.http = http;
    }
    PokemonService.prototype.list = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get("https://pokeapi.co/api/v2/pokedex/2/", {
            headers: headers
        })
            .toPromise()
            .then(function (res) {
            var data = res.json();
            var allPokemon = [];
            data.pokemon_entries.forEach(function (entry) {
                var pokemon = new pokemon_model_1.Pokemon();
                pokemon.name = entry.pokemon_species.name;
                pokemon.id = entry.entry_number;
                allPokemon.push(pokemon);
            });
            return allPokemon;
        })
            .catch(this.handleError);
    };
    PokemonService.prototype.get = function (id) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get("https://pokeapi.co/api/v2/pokemon/" + id + "/", {
            headers: headers
        })
            .toPromise()
            .then(function (res) {
            var data = res.json();
            var pokemon = new pokemon_model_1.Pokemon();
            pokemon.name = data.name;
            pokemon.id = data.id;
            data.types.forEach(function (eachType) {
                pokemon.types.push(eachType.type.name);
            });
            data.stats.forEach(function (eachStat) {
                pokemon.stats.push({
                    name: eachStat.stat.name,
                    value: eachStat.base_stat
                });
            });
            return pokemon;
        })
            .catch(this.handleError);
    };
    PokemonService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || "";
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || "") + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return PokemonService;
}());
PokemonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELHVDQUFxQztBQUVyQyxpREFBMEM7QUFHMUMsSUFBYSxjQUFjO0lBQ3pCLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsNkJBQUksR0FBSjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUU7WUFDM0QsT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FBQzthQUNELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFDLEdBQWE7WUFDbEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUVwQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO2dCQUM1QixPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0JBQ2hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxFQUFVO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3BFLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUM7YUFDRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxHQUFhO1lBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztZQUM1QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBRXJCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ3hCLEtBQUssRUFBRSxRQUFRLENBQUMsU0FBUztpQkFDMUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLG9DQUFXLEdBQW5CLFVBQXFCLEtBQXFCO1FBQ3hDLElBQUksTUFBYyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxlQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxZQUFNLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxVQUFJLEdBQUssQ0FBQztRQUNoRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDO0FBckVZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLGNBQWMsQ0FxRTFCO0FBckVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcblxuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCIuL3Bva2Vtb24ubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBva2Vtb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICBsaXN0KCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yL1wiLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfSlcbiAgICAudG9Qcm9taXNlKClcbiAgICAudGhlbigocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgbGV0IGFsbFBva2Vtb24gPSBbXTtcblxuICAgICAgZGF0YS5wb2tlbW9uX2VudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgbGV0IHBva2Vtb24gPSBuZXcgUG9rZW1vbigpO1xuICAgICAgICBwb2tlbW9uLm5hbWUgPSBlbnRyeS5wb2tlbW9uX3NwZWNpZXMubmFtZTtcbiAgICAgICAgcG9rZW1vbi5pZCA9IGVudHJ5LmVudHJ5X251bWJlcjtcbiAgICAgICAgYWxsUG9rZW1vbi5wdXNoKHBva2Vtb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhbGxQb2tlbW9uO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0KGlkOiBudW1iZXIpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vXCIgKyBpZCArIFwiL1wiLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfSlcbiAgICAudG9Qcm9taXNlKClcbiAgICAudGhlbigocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgbGV0IHBva2Vtb24gPSBuZXcgUG9rZW1vbigpO1xuICAgICAgcG9rZW1vbi5uYW1lID0gZGF0YS5uYW1lO1xuICAgICAgcG9rZW1vbi5pZCA9IGRhdGEuaWQ7XG5cbiAgICAgIGRhdGEudHlwZXMuZm9yRWFjaCgoZWFjaFR5cGUpID0+IHtcbiAgICAgICAgcG9rZW1vbi50eXBlcy5wdXNoKGVhY2hUeXBlLnR5cGUubmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgZGF0YS5zdGF0cy5mb3JFYWNoKChlYWNoU3RhdCkgPT4ge1xuICAgICAgICBwb2tlbW9uLnN0YXRzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGVhY2hTdGF0LnN0YXQubmFtZSxcbiAgICAgICAgICB2YWx1ZTogZWFjaFN0YXQuYmFzZV9zdGF0XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHJldHVybiBwb2tlbW9uO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8IFwiXCI7XG4gICAgICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCBcIlwifSAke2Vycn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyTXNnKTtcbiAgfVxufSJdfQ==