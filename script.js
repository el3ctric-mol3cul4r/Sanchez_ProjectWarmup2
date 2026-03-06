function describeRoom(room) {
    if (room === "dining") {
        console.log(`You enter the mansion Captain Wesker instructed your team to enter. 
He splits the S.T.A.R.S. team up, and you hesitantly open the door to the left. 
You encounter a spacious dining room, grandiose and a bit eerie from the silence. It seems like it hasn't been touched in decades.
A grandfather clock in the corner of the room ticks, mirroring your rapid heartbeat.`);
    } else if (room === "piano_room") {
       console.log(`You head right, your nerves making you feel queasy, the dust from the ancient relics making you cough.
You open a heavy door and reveal a room with a minibar in the corner, stocked up with colorful bottles.
But the piece de resistance is a massive piano in the middle of the room. It's waiting for you to play it.
The piece waiting for you is Moonlight Sonata. You sit down and play, the keys soothing your racing mind.`);
    } else if (room === "greenhouse") {
        console.log(`You move to the center of the hall, the door creaking as you open it.
The smell of dead plants hits you, wilted flowers surrounding a fountain, with a massive, strange plant in the middle.
It swats at you with its tentacle-like branches, seriously hurting you. You wonder what you did to it.
It seems to almost be sentient. You would be lying if you said it didn't scare the life out of you.`);
    } else {
        console.log(`You head behind the center wall, going downstairs. You open a door with bars on the window, curiosity overruling reason.
You gag, the room smelling like sulfur and something more terrifying. The once stainless-steel pots on the stove are rusted, in a run-down kitchen.
Rotten meat crawls with maggots, paralleling the corpses of the dead you see littered in the corner.
You immediately plug your nose, looking for something useful like a knife in case one of the bodies resurrects.`); 
    }
};

describeRoom("kitchen");


const exampleNode = {
    image: "images/kitchen.jpg",
    text: `You head behind the center wall, going downstairs. You open a door with bars on the window, curiosity overruling reason.
You gag, the room smelling like sulfur and something more terrifying. The once stainless-steel pots on the stove are rusted, in a run-down kitchen.
Rotten meat crawls with maggots, paralleling the corpses of the dead you see littered in the corner.
You immediately plug your nose, looking for something useful like a knife in case one of the bodies resurrects.`,
    choices: ["Exit through the right door and to the center room", "Search the corpses", "Go left to the other door"],
};

console.log(exampleNode)

const greenhouseNode = {
    image: "images/greenhouse.jpg",
    text: `You move to the center of the hall, the door creaking as you open it.
The smell of dead plants hits you, wilted flowers surrounding a fountain, with a massive, strange plant in the middle.
It swats at you with its tentacle-like branches, seriously hurting you. You wonder what you did to it.
It seems to almost be sentient. You would be lying if you said it didn't scare the life out of you.`,
    choices: ["Exit through the right door", "Exit through the left door"],
};

const diningNode = {
    image: "images/dining_hall.jpg",
    text: `You enter the mansion Captain Wesker instructed your team to enter. 
He splits the S.T.A.R.S. team up, and you hesitantly open the door to the left. 
You encounter a spacious dining room, grandiose and a bit eerie from the silence. It seems like it hasn't been touched in decades.
A grandfather clock in the corner of the room ticks, mirroring your rapid heartbeat.`,
    choices: ["Exit through the right door and go downstairs", "Exit through the left door"],
};

const piano_roomNode = {
    image: "images/piano_room.jpg",
    text: `You head right, your nerves making you feel queasy, the dust from the ancient relics making you cough.
You open a heavy door and reveal a room with a minibar in the corner, stocked up with colorful bottles.
But the piece de resistance is a massive piano in the middle of the room. It's waiting for you to play it.
The piece waiting for you is Moonlight Sonata. You sit down and play, the keys soothing your racing mind.`,
    choices: ["Exit through the right door and go downstairs", "Exit through the left door, enter the center door"],
};

storyNodes = [diningNode, piano_roomNode, greenhouseNode, exampleNode];

const imageElement = document.getElementById("image");
const textElement = document.getElementById("text");
const choicesContainer = document.getElementById("choices-container");

function displayNode(index) {
    const node = storyNodes[index];
    imageElement.src = node.image;
    textElement.innerText = node.text;
    choicesContainer.innerHTML = "";

    node.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        choicesContainer.appendChild(button);
    });
}

displayNode(1);