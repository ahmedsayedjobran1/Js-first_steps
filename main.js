const spices = [
    { name: "Emma", nickname: "baby" },
    { name: "Geri", nickname: "Ginger" },
    { name: "Mel B", nickname: "Scary" },
    { name: "Mel C", nickname: "sporty" }
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
spiceGirls.albums[3] = "Victoria";
console.log(Girl_power);
console.log(Ginger_spice);
console.log(Spiceworld);
console.log(spiceGirls.albums);