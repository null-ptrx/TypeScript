// function makeChai(order : {type : string, sugar : number, strong : boolean}) {
//     console.log(order);
// }

// function serverChai(order : {type : string, sugar : number, strong : boolean}) {
//     console.log(order);
// }

// or 


type chaiOrder = {
    type : string, 
    sugar : number, 
    strong : boolean
}
function makeChai(order : chaiOrder) {
    console.log(order);
}

function serverChai(order : chaiOrder) {
    console.log(order);
}

// type teaRecipe = {
//     water : number,
//     milk : number
// }

// class masalaChai implements teaRecipe {
//     water = 100;
//     milk = 50;
// }

//or 

interface teaRecipe  {
    water : number,
    milk : number
}

class masalaChai implements teaRecipe {
    water = 100;
    milk = 50;
}

interface cupSize { 
    size : "small" | "large";
}


class chai implements cupSize {
    size : "small" | "large" = "large";
}