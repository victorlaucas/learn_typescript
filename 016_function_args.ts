// Question mark makes that argument optional 
// function printAddress(street: string, streetTwo?: string, state = 'AZ') {
//   console.log(street);
//   if(streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress('123 Any Street', 'suite 540');
// printAddress('123 Any Street', 'suite 540', 'UT');

function lineupCard(team: string, ...players: string[]){
  console.log('Team: ' + team);
  for (let player of players){
    console.log(player);
  }
}

lineupCard('Astros', 'Altuve', 'Corerra', 'Bregman');
