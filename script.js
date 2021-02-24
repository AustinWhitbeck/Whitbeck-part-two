
// list of variables
// petnamename, pet, feed, walk, happiness, energy, activity, activities

// variable amounts
// feed = energy + 2
// pet = happiness + 1
// walk = (happiness + 2) + (energy - 1)

// loop 6 times

//special note, if user choose "walk" but energy level is "0" do not increase happiness or decrease energy. Prompt "Not enough energy to enjoy a walk"

// at end of 6 loops log pet's name, happiness and energy level to console.




/* These are the objects. the dog, the activties users can pick, and the
other stuff

*/

const dog = {
    energy: 0,
    happiness: 0,
    };

const activities = {
    feed: "feed",
    pet: "pet",
    walk: "walk"
};

const feedEnergy = 2;
const petHappiness = 1;
const walkHappyEnergy = {
    energy: -1,
    happiness: 2
};

// functions //

function feedDog(dog){
    dog.energy = dog.energy + feedEnergy;
    console.table(dog);
};

function petDog(dog){
    dog.happiness = dog.happiness + petHappiness;
    console.table(dog);
};

function walkDog(dog) {
    if (dog.energy === 0) {
        alert("Not enough energy to walk, try feeding your pet first!")
} else {
    dog.energy = dog.energy - 1,
    dog.happiness = dog.happiness + 2
}
};

// Initial prompt to have user enter dog's name //

let petname = prompt("Hello! What is your pet's name?");
console.log(petname);

// Tell the user what the purpose of this application is // 

explanationPrompt = prompt(`Today we are going to do some activities with ${petname}! There are three activities you can do! You can feed your pet, pet your pet, or walk your pet. You have time for six activities before your day is over. Click 'Ok' to continue.`)

/* Prompts */

const activity_amount = 6;

let choice;

let check = 0;

for (let activity = 0; activity < activity_amount; activity++) {
    while (check === 0) {
        choice = prompt("What would you like to do with your dog? Feed, pet, or walk?");
            switch (choice){
                case "feed": check = 1; break; 
                case "walk": check = 1; break;
                case "pet": check = 1; break;
                default: alert("please pick feed pet or walk") 
            }
    }
             if (choice === activities.feed){
                feedDog(dog);
                alert(`You fed ${petname}! They are more energetic! `);
            } if (choice === activities.pet) {
                petDog(dog);
                alert(`You pet ${petname}! They are quite happy about it!`);
            } if (choice === activities.walk) {
                walkDog(dog);
                alert(`You take ${petname} for a walk. They are quite happy, but a little tired!`);
            } check = 0;
        }

document.write(petname + " has " + dog.happiness + " happiness and " + dog.energy + " energy.");

