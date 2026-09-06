"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length;
let bookString = '{"name" : "who moves my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
let value;
value = 'chai';
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newvalue;
newvalue = 'chai';
newvalue = [1, 2, 3];
newvalue = 2.5;
if (typeof newvalue === 'string') {
    newvalue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log('error', error);
}
const data = 'chai aur code';
const strData = data;
function redirectBasedOnRole(role) {
    if (role === 'admin') {
        console.log('redirecting to admin dashboard');
        return;
    }
    if (role === 'user') {
        console.log('redirecting to user dashboard');
        return;
    }
    role;
}
function neverReturn() {
    while (true) {
    }
}
//# sourceMappingURL=moreTypes.js.map