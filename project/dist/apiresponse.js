"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rawResponse = JSON.parse('{"id" : 1, "name" : "dhami", "role" : "admin"}');
console.log(rawResponse);
function isApiUser(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    const candidate = obj;
    console.log(candidate.name);
    return (typeof candidate.id === 'number' &&
        typeof candidate.name === 'string' &&
        (candidate.role === 'admin' || candidate.role === 'user' || candidate.role === 'superadmin'));
}
;
function parseUser(data) {
    if (isApiUser(data)) {
        return data;
    }
    return 'invalid data';
}
//# sourceMappingURL=apiresponse.js.map