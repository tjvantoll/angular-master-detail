export class Pokemon {
  name: string;
  id: number;
  types = [];
  stats = [];

  constructor() {}

  formattedName() {
    return this.name ? 
      this.name[0].toUpperCase() + this.name.substr(1) : "";
  }

  image() {
    return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png"
  }
}