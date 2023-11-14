
let inputYards = prompt(`Please enter your measurement in yards`); 
console.log("Input yards: ", inputYards);

function convertToMeters(yards) {
    return yards * .9144;
}

let convertedMeters = convertToMeters(inputYards);
console.log(convertedMeters);

function createMessage(yards,meters) {
    let message = ``;
    const numYards = yards * 1; 
    if (numYards === 1760) {
        message = `That is as long as a mile!`;
    } else if (numYards === 100) {
        message = `That is as long as a football field!`;
    } else if (numYards === 26) {
        message = `That is as long as a tennis court!`;
    } else if (numYards === 1) {
        message = `That is as long as a yardstick!`;
    }
    return `${yards} yards is ${meters} meters. ${message}`;
} 


let output = createMessage(inputYards, convertedMeters);

let randomYards = Math.random() * 100;
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);
