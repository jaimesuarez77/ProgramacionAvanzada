/*let myCar = new Object();
myCar.make = 'ford';
myCar.model = 'Mustang';
myCar.year = 1969 ;*/

let myCar = {
    make :'ford',
    model : 'Mustang',
    year : 1969 

}

/*
myCar['make']  = 'Ford';
myCar['model'] = 'Mustang';
myCar['year']  = 1969;*/

function Padawan( planet, age, height) {
    this.planet = planet;
    this.age = age;
    this.height = height;
  }
  let Dooku = new Padawan('Serenno', 83, 193);
  let Cin_Drallig = new Padawan('tierra', 38, 174);
