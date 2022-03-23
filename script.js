let person = {
    name: 'Oladapo',
    age: 30,
    occupation: 'Soft Guy',
    hobbies: ['vd games', 'Money', 'Cars', 'Travel']
}
// console.log(person['age']);
let input = prompt('What do you what to know about me?')

if (Array.isArray(person[input])) {
    let val = prompt(`Enter a number between 0 and ${peron[input].
    length-1} and i will tell you one hobby that i have`)
      if (!val || !person[input][val]){
          alert('I dont have a hobby under that number')
      }else{
          alert(person[input][val])
      }

     let statement = `<h2> My ${input} includes.... </h2> <br>` 
     person[input ].forEach ((val, index) => {
         statement += `<li>${index+1}:${val}</li> \n`
     })
     let ul = document.createElement('ul')
     ul.innerHTML= statement
     document.body.append(ul)

}else {
    alert(person[input])
}



let car = {
    name: 'G-wagon',
    brand:'Mercedes-Benz',
    color: 'Black',
    year: '2022',
    condition: 'Brand - New',
    speeds: 0,
    maXSpeed: 180,
    accelerate (val){
        if (this.speed < this.maXSpeed){
            this.speed += 10
        } else { 
            throw new Error ('Cannot go beyond Speed limit')
        }
    },
    brake(val) {
        if (this.speed === 0) return
        if (!val) {
            this.speed -= 10
        }else {
            this.speed -= val
        }

    },
    status (){
        console.log(`
            Status Report for ${this.brand} ${this.name}   
            Current Speed: ${this.speed}
            Speed  Limit: ${this.maXSpeed}
            Condition: ${this.condition}
            color: ${this.color}
            Year: ${this.year}

        `);
    }
}
car.status()
for (let i = 0; i <= 18; i ++){
    car.accelerate()
    console.log(car.speed);
}



class car {
    constructor (name, color, speed) {
        this.name = name;
        this.color = color;
    }

    accelerate () {
        console.log(this.name, 'is Accelerating...');
    }
}

let car = new car ('Honda', 'red', 20)
console.log(car);
let car2 = new car ('Venza', 'Blue', 70)
console.log(car2);

car.accelerate()
car2.accelerate()


class Person {
    constructor (name, age ) {
        this.name = name;
        this.age = age;

    }
    walk () {
        console.log(this.name, 'is walking ....');
    }
} 
let person1 = new Person('Oladapo', 33)
console.log(person1);
person1.walk()

class Doctor extends Person {
    treatPatients () {
        console.log( 'Dr.', this.name,'Treating some individuals wey no dey hear word..');
    }

}
let person2 = new Doctor('Oladapo', 33)
person2.walk()
person2.treatPatients()










