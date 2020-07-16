// feetToMile.js

function feetToMile(ft) {
  let mileFromFeet = ft / 5280;
  mileFromFeet = "" + mileFromFeet;
  if (mileFromFeet.indexOf(".") >= 0) {
    mileFromFeet = +mileFromFeet;
    return mileFromFeet.toFixed(8) + " mi";
  } else {
    return mileFromFeet + " mi";
  }
}
console.log(feetToMile(528000));

// woodCalculator.js

function woodCalculator(chair, table, bed) {
  const chairCalc = chair * 1;
  const tableCalc = table * 3;
  const bedCalc = bed * 5;
  return chairCalc + tableCalc + bedCalc + " cu ft";
}
console.log(woodCalculator(5, 10, 20));

// brickCalculator.js

function brickCalculator(floor) {
  let beforeEleven = 0;
  let beforeTwentyOne = 0;
  let afterTwentyOne = 0;
  for (let i = 1; i <= floor; i++) {
    if (i <= 10) {
      beforeEleven = (i * 15) * 1000;
    } else if (i > 10 && i < 21) {
      beforeTwentyOne = ((i - 10) * 12) * 1000;
    } else if (i > 20) {
      afterTwentyOne = ((i - 20) * 10) * 1000;
    }
  }
  return beforeEleven + beforeTwentyOne + afterTwentyOne + " bricks";
}

console.log(brickCalculator(21));

// tinyFriends.js

function tinyFriends(names) {
  if (names.length >= 2) {
    let tinyFriendName = names[0];
    for (let i = 0; i < names.length; i++) {
      if (names[i].length <= tinyFriendName.length ) {
        tinyFriendName = names[i];
      }
    }
    return tinyFriendName;
  } else {
    return "You have to put minimum two names"
  }
}
const friendNamesList = ["Fahmi", "Fakhruddin", "Fazl ur Rahman", "Hayatullah", "Ikhtiyar al-Din", "Imran", "Jamal ad-Din", "Kamal ad-Din", "Manzur", "Mizanur Rahman"];
console.log(tinyFriends(friendNamesList));
