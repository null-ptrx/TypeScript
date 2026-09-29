const chaiFlavours: string[] = ['masala', 'adrak'];
const chaiPrice : number[] = [10, 20];

const rating: Array<number> = [2.5, 4.6]

type chai = {
    name : string,
    price : number
}

const menu: chai[] = [
    {name : "masla", price : 15}, {name : "adrak", price : 25}
]

//readonly array 

const cities : readonly string[] = ['delhi', 'jaipur']

//multidemisonal arrays

const table: number [][] = [
    [1, 2, 3], [4, 5, 6]
]

//tuples
let chaiTuple : [string, number];
chaiTuple = ['masala', 20]

let userInfo : [string, number, boolean?];
userInfo = [
    'dhami', 100
]

// readonly tuple

const locations : readonly [number, number] = [29, 32];

// namedtuples

const chaiItems : [name:string, price:number] = ['masala', 25];

//enums

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupSize.LARGE;

enum status {
    PENDING = 100,
    SERVED, // 101  automatically get value if not given 
    CANCELLED //102

}


enum chaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makechai(type:chaiType) {
    console.log(`making : ${type}`)
}
makechai(chaiType.GINGER)


//hetrogenous value

enum randomenum {
    ID : 1,  // not stander practice
    NAME = 'chai'
}

const enum sugar {
    LOW : 1,
    MEDIUM : 2,
    HIGH : 3
}

const s = sugar.HIGH

//gocha

let t : [string, number] = ['chai', 10]
t.push("extra");