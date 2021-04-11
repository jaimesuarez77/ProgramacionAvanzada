//let fuerza = "El padawan se asigna a las clases del manejo de la fuerza...";
let fuerza = `El Padawan ${Padawan} se asigna a las clases de manejo de la fuerza...`;
let sable = "El padawan esta listo para el manejo del 'sable de luz' ...";
let limite = 15;

function Padawan( planet, age, height) {
    this.planet = planet;
    this.age = age;
    this.height = height;
  }
let Dooku = new Padawan('Serenno', 83, 193);
let Cin_Drallig = new Padawan('Tierra', 38, 174);
let Mace_Windy = new Padawan('Haruun Kal', 53, 192);
let Obi_wan_Kenobi = new Padawan('Stewjon', 12, 182);
let Luke_Skywalker = new Padawan('Tatooine', 13,172);

//operador ternario
let asignar = (Obi_wan_Kenobi.age < limite) ? console.log(fuerza) : console.log(sable)


//let selection = (escoger)=>{};



