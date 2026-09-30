class Chai {
    flavour : string;
    // price : number;

    // constructor(flavour: string, price: number) {
    //     this.flavour = flavour;
    //     this.price = price;
    // }

    constructor(flavour: string) {
        this.flavour = flavour;
        console.log(this)
    }
}

const masalaChai = new Chai("adark")


//acess modifiers

class chai {
    public flavour : string = 'masalachai'

    private screteIngredients = 'cardamon'

    reveal() {
        return this.screteIngredients
    }

   
}

const c = new chai()
 class shop {
    protected shopName = 'chai cornner' 
 }
class Branch extends shop {
    getname() {
        return this.shopName
    }

}


class Wallet {
    #balance = 100

    getbalance() {
        return this.#balance
    }

}

const w = new Wallet()

class cup {
    readonly capacity:number = 250

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

//controlled gates

class modernchai {
    private _sugar = 2

    get sugar () {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("too sweet")
        this._sugar = value
    }
}
const c = new modernchai()
c.sugar = 3


class ekchai {
    static shopname = 'dhamicafe'

    constructor (public flavour:string) {}
}
console.log(ekchai.shopname)

