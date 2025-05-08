// class Car {
//     constructor(name, speed, width, height) {
//         this.name = name;
//         this.speed = speed;
//         this.width = width;
//         this.height = height;
//     }

//     getCarInfo() {
//         return `Car name: ${this.name}, speed: ${this.speed}, width: ${this.width}, height: ${this.height}`
//     }
// }

// let car1 = new Car("BMW", 200, 2, 1.5)

// console.log(car1.getCarInfo());
// let obj = {}

// obj.name = 'salom'
// console.log(obj);



// function clousure(){
//     let count = 0 //functional scope ichida elon qilinib ichkaridagi funksiyaga kira olish bu clousure deyiladi
//     function inner(){
//         count++
//         console.log(count);
//     }
// }

// const obj = {
//     name :"Abubakr",
//     greet:function(){
//         console.log("Salom"+" "+ this.name);
//     },
// }


// class Animal {
//     speak() {
//       console.log("Hayvon ovoz chiqaryapti...");
//     }
//   }

//   class Dog extends Animal {
//     bark() {
//       console.log("Vov-vov!");
//     }
//     speak() {
//         console.log("Hayvon ovoz chiqaryapti...");
//       }
//   }

//   const dog = new Dog();
//   dog.speak(); // Hayvon ovoz chiqaryapti...
//   dog.bark();




// class Animal {
//     speak() {
//         console.log("Animal sound");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Meow");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Bark");
//     }
// }
// class girrafs extends Animal {
//     speak() {
//         console.log("Bo'o'o'o'o'o'o'o'o'o'o'o'o'o'o'o");
//     }
// }

// function makeSound(animal) {
//     animal.speak();
// }

// makeSound(new Cat()); // Meow
// makeSound(new Dog()); // Bark
// makeSound(new girrafs()); // Giraffe sound

// class Robot {
//     move() {
//       setTimeout(() => {
//         console.log("🤖 Robot is moving...");
//       }, 10000);
//     }
  
//     speak() {
//       setTimeout(() => {
//         console.log("🤖 Hello, I am a robot!");
//       }, 2000);
//     }
  
//     shutdown() {
//       setTimeout(() => {
//         console.log("🤖 Shutting down...");
//       }, 20000);
//     }
//   }
  
//   const r = new Robot();
//   r.move();     
//   r.speak();    
//   r.shutdown(); 
  

// class Robot {
//     wait(ms) {
//       return new Promise(resolve => setTimeout(resolve, ms));
//     }
  
//     async start() {
//       console.log("🤖 Starting...");
//       await this.wait(3000);
//       console.log("🤖 Moving...");
//       await this.wait(4000);
//       console.log("🤖 Speaking...");
//       await this.wait(5000);
//       console.log("🤖 Shutting down...");
//     }
//   }
  
//   const bot = new Robot();
//   bot.start();
  