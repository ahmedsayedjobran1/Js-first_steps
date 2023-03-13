const spices = [
    { name: "Emma", nickname: "baby" },
    { name: "Geri", nickname: "Ginger" },
    { name: "Mel B", nickname: "Scary" },
    { name: "Mel C", nickname: "sporty" },
    { name: "Victoria", nickname: "Posh" },
];

let spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl power",
    members: spices
};
// Girl Power
let Girl_power = spiceGirls.motto;
let Ginger_spice = spiceGirls.members;
let Spiceworld = spiceGirls.albums[1];
console.log(Girl_power);
console.log(Ginger_spice);
console.log(spiceGirls.members[4].name);  //  it's most complicated 

