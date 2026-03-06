const person = {
    name: "Anuj", 
    greet() {
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Billu"});
boundGreet();



// research on Bind, call and apply on google or may be discord but it's imp 