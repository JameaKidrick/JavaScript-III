/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when using the this keyword, you should state the object in reference otherwise it will refer to the window object
* 2. Implicit Binding - the this keyword will automatically reference the object on the left side of the dot notation
* 3. New Binding - utilizing the new keyword to make a new object which the this keyword will reference
* 4. Explicit Binding - the this keyword will manually (by us telling what to point to) reference an object using call, apply, or bind
*
* write out a code example of each explanation above
*/

// Principle 1
const cat = function(){
    console.log(this);
}

// code example for Window Binding


// Principle 2
const tombRaider = {
    mainCharacter: 'Lara',
    ability: 'intellect',
    enemy: 'Trinity',
    summary: function(){
        console.log(`The main character, ${this.mainCharacter}, uses her ${this.ability} to take down ${this.enemy}.`)
    }
}

tombRaider.summary();


// code example for Implicit Binding

// Principle 3
function Rihanna(saying){
    this.thing = saying;
}

let song = new Rihanna('Shine bright like a diamond');

console.log(song.thing);

// code example for New Binding

// Principle 4
function CompletelyNormal(){
    console.log(this.sound);
}

const programmer = {
    sleep: 'none',
    sound: 'REEEEEEEEEEEE'
}

CompletelyNormal.call(programmer);

// code example for Explicit Binding