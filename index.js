const farmAnimals = "cow horse sheep pig chicken";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// Strings

// 1. Use destructuring to declare five animal sounds.

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. Use destructuring to declare the four traditional animal names.
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// 3. Use destructuring to declare the three traditional animal colors.
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

// Arrays

// 4. Declare the seven traditional rainbow color variables.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Declare six rainbow color variables using initials, excluding indigo.
const [r, o, y, g, b, , v] = colors;

// 6. Declare indigo separately using indg.
const [, , , , , indg] = colors;

// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as variable names.
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, Kermit's job, and partner.
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
