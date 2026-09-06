type UserRole = 'admin' | 'user' | 'superadmin';

type ApiUser = {
    id : number;
    name : string;
    role : UserRole;
};

const rawResponse: unknown = JSON.parse('{"id" : 1, "name" : "dhami", "role" : "admin"}');

console.log(rawResponse);

function isApiUser(obj : unknown): obj is ApiUser {
    if (typeof obj !== 'object' || obj === null) return false;

    const candidate = obj as Record<string , unknown>;
    console.log(candidate.name);

    return (
        typeof candidate.id === 'number' &&
        typeof candidate.name === 'string' &&
        (candidate.role === 'admin' ||candidate.role === 'user' ||candidate.role === 'superadmin')
    )
};

function parseUser(data: unknown): ApiUser | string {
    if (isApiUser(data)) {
        return data;
    }
    return 'invalid data';
}

parseUser(rawResponse);
