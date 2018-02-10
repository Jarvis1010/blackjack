const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
const values = [
  { face: 'A', value: 11 },
  { face: 'K', value: 10 },
  { face: 'Q', value: 10 },
  { face: 'J', value: 10 },
  { face: '2', value: 2 },
  { face: '3', value: 3 },
  { face: '4', value: 4 },
  { face: '5', value: 5 },
  { face: '6', value: 6 },
  { face: '7', value: 7 },
  { face: '8', value: 8 },
  { face: '9', value: 9 },
  { face: '10', value: 10 },
];

export const createDeck = () => {
  return suits.reduce((acc, suit) => {
    return acc.concat(
      values.map(value => {
        return { suit, ...value };
      })
    );
  }, []);
};

//adapted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = arr => {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};
