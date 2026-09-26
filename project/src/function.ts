function makechai(type : string, cups : number) {
    console.log(`making ${cups} cups of ${type}`);
}

makechai('masala', 20);

function getChaiPrice():number {
    return 25

}

function makeOrder(order : string) {
    if (!order) return null;
    return order;
}

//logerfunctions

function logChai():void {
    console.log("chai is ready");
} 

//optional parameter and defult parameter

// function orderChai(type ? : string) {

// }


function orderChai(type : string = 'masala') {
    
}


function createChai(order : {
    type : string;
    sugar : number,
    size : "small" | "larger"
}):number {
    return 45;
}