// Prompt the user for a number to begin counting down bottles.
let bottles = prompt("Give me a number of beers");
let bottlesNum = Number(bottles);

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

for (let i = 1; bottlesNum >= 0; i++) {
  if (i > 1) {
    if (bottlesNum <= 1) {
      console.log(`1 bottle of beer on the wall
1 bottles of beer
Take 1 down, pass it around
No bottle of beer on the wall
`);
    } else if (bottlesNum === 2) {
      console.log(`2 bottles of beer on the wall
2 bottles of beer
Take 1 down, pass it around
1 bottle of beer on the wall
`);
    } else if (bottlesNum === i) {
      console.log(`${i} bottle of beer on the wall
${i} bottles of beer
Take ${i} down, pass them around
No bottle of beer on the wall
`);
    } else if (bottlesNum < i) {
      console.log(`${bottlesNum} bottle of beer on the wall
${bottlesNum} bottles of beer
Take ${bottlesNum} down, pass them around
No bottle of beer on the wall
`);
    } else {
      console.log(`${bottlesNum} bottles of beer on the wall
${bottlesNum} bottles of beer
Take ${i} down, pass them around
${bottlesNum - i} bottles of beer on the wall
`);
    }
  } else {
    if (bottlesNum <= 1) {
      console.log(`1 bottle of beer on the wall
1 bottles of beer
Take 1 down, pass it around
No bottle of beer on the wall
`);
    } else if (bottlesNum === 2) {
      console.log(`2 bottles of beer on the wall
2 bottles of beer
Take 1 down, pass it around
1 bottle of beer on the wall
`);
    } else {
      console.log(`${bottlesNum} bottles of beer on the wall
${bottlesNum} bottles of beer
Take ${i} down, pass it around
${bottlesNum - i} bottles of beer on the wall
`);
    }
  }

  bottlesNum = bottlesNum - i;
}

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect

// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.

// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.
