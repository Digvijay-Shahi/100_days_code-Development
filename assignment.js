const country = 'India';
const contitient = 'Asia';
let population = 1200 ;
console.log(country);
console.log(contitient);
console.log(population);
const isIsland = false;
let language = 'Hindi';
console.log(isIsland);
console.log(language);
console.log(typeof language);
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
// country = 'USA';
const halfPopulation = population / 2;
console.log('the half population will be', halfPopulation);
population++;
console.log(population)
const finland_Population = 6;
console.log(population > finland_Population);
const average_Population = 33;

console.log(average_Population > population);
const description = country + ' is in '  + contitient + ',' + ' and its ' + population + ' million people speak '+ language ;
console.log(description)
const description_ = `${country} is in ${contitient}, and its ${population} million people speak ${language}`;
console.log(description_) 
if (population > average_Population)
{
const show = `${country} population is above average `;
console.log(show);
}
else {
    const avg = average_Population - population;
    const show_avg =   `${country} population is ${avg} million below average`;
    console.log(show_avg);
}


// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;


// const  numNeighbours = Number (prompt('How many neighbour countries does your country have?'))
// if (numNeighbours=== 1) console.log('Only 1 neighbours');
// else if(numNeighbours > 1)
// { console.log('more than 1 country')
// }
// else {
//     console.log('no border')
// } 
  
switch(language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!')
        break;
    case 'spanish:':
        console.log('2nd place in number of native speakers')
        break;
    case 'Hindi':
        console.log('is the most famous langauge')
        break;
    default:
        console.log('all are good')
} 
console.log(`${country} population is ${population > 33 ? 'above' : 'below'} average`)
