let footballPlayer1: {
    firstName: string,
    lastName: string,
    position: string,
    jerseyNumber: number
};

footballPlayer1 = {
    firstName: "Calvin",
    lastName: "Johnson",
    position: "WR",
    jerseyNumber: 88
};

// Could also do it like this
let footballPlayer2: {
    firstName: string,
    lastName: string,
    position: string,
    jerseyNumber: number
} = {
    firstName: "Calvin",
    lastName: "Johnson",
    position: "WR",
    jerseyNumber: 88
};

// This is object type
// The Object type, however, describes functionality that is available on all objects.

console.log(footballPlayer1.position);