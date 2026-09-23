const chai = {
    name : "masalachai",
    price : 20,
    isHot : true
}

// {
//     name : string,
//     price : number,
//     isHot : boolean
// }

let tea : {
    name : string,
    price : number,
    isHot : boolean
}

tea = {
    name : "ginar tea",
    price : 25,
    isHot : true
}

type Tea = {
    name : string,
    price : number,
    ingredients : string[]
}

const adrakChai: Tea = {
    name : "adark chai",
    price : 25,
    ingredients : ["ginnar", "tea leaves"]
}

type cup = {size : string};
let smallCup: cup = {
    size : "200ml"
}
let bigCup = {
    size : "500ml", 
    material : "steel"
}
smallCup = bigCup;


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "africa"}
const chaiBrew : Brew = coffee;

type User = {
    username : string,
    password : string
}

const u : User = {
    username : "chaicode",
    password : "123"
}

type Item = {name : string, quantity: number};
type address = {street : string, pin : number}

type Order = {
    id : string,
    items : Item[],
    address : address
}

type Chai = {
    name :string,
    price : number,
    isHot : boolean 
} 

const updateChai = (updates : Partial<Chai>) => {
    console.log("updating chai with", updates);

}

updateChai({price : 25});


