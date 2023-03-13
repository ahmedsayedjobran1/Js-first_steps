let Ahmed = { name: "Ahmed" };
Ahmed.speak = function () {
    console.log("hi my name is", this.name)
}

Ahmed.speak(); // this refers to the Ahmed object