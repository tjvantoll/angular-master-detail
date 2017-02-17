"use strict";
var Pokemon = (function () {
    function Pokemon() {
        this.types = [];
        this.stats = [];
    }
    Pokemon.prototype.formattedName = function () {
        return this.name ?
            this.name[0].toUpperCase() + this.name.substr(1) : "";
    };
    Pokemon.prototype.image = function () {
        return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png";
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBva2Vtb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7UUFHRSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQVViLENBQUM7SUFSQywrQkFBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDRSxNQUFNLENBQUMsNERBQTRELEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUE7SUFDeEYsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBva2Vtb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGVzID0gW107XG4gIHN0YXRzID0gW107XG5cbiAgZm9ybWF0dGVkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lID8gXG4gICAgICB0aGlzLm5hbWVbMF0udG9VcHBlckNhc2UoKSArIHRoaXMubmFtZS5zdWJzdHIoMSkgOiBcIlwiO1xuICB9XG5cbiAgaW1hZ2UoKSB7XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9yYXdnaXQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL1wiICsgdGhpcy5pZCArIFwiLnBuZ1wiXG4gIH1cbn0iXX0=