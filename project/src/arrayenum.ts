const chaiFlavours: string[] = ['masala', 'adrak'];
const chaiPrice : number[] = [10, 20];

const rating: Array<number> = [2, 4]

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