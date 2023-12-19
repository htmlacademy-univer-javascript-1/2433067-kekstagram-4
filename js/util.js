function getRandInt(intFrom, intTo){
  if (intFrom > intTo || intFrom < 0 || intTo < 0 ){
    return  new Error('Error. Change input values');
  }
  return Math.round(intFrom - 0.5 + Math.random(intFrom, intTo) * (1 + intTo - intFrom));
}

const generateArray = (length, max) => (
  [...new Array(length)].map(() => Math.round(Math.random() * max)));

function getId (usersId) {
  const temp = usersId[getRandInt(0,usersId.length-1)];

  delete(usersId[getRandInt(0,usersId.length-1)]);
  return temp;
}

const pressEscape = (evt) => evt.key === 'Escape';

export {getRandInt, generateArray, getId, pressEscape};
