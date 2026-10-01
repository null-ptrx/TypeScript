interface Chai {
    flavor: string,
    price : number,
    milk? : boolean
}

const masala:Chai = {
    flavor: 'masala',
    price : 30
}
interface Shop {
    readonly id : number,
    name : string
}

const s: Shop = {id : 1, name : 'Chaicode caffe'}
// s.id = 2

interface DiscountCalculator {
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
    start(): void
    stop(): void
}

const machine : TeaMachine = {
    start() {
        console.log("start")
    },
    stop() {
        console.log("stop")
    }
} 

//index signature

interface ChaiRatings {
    [flavor : string] : number
}

const ratings: ChaiRatings = {
    masala : 4.5,
    ginger : 4.5,
}

interface user {
    name :string
}

interface user {
    age : number
}

const u : user = {
    name : 'hitesh',
    age : 45
}

interface a {a: string}
interface b {b: string}

interface c extends a,b {}