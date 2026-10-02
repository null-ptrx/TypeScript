function wrapInArray<T>(item : T): T[] {
    return [item]
}

wrapInArray('masala')
wrapInArray(45)
wrapInArray({flavor : "ginger"})

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair('masala', 20)
pair('masala', {flavor : 'ginger'})


interface Box<T> {
    content : T
}

const numberBox: Box<number> = {content : 45}
const numberBoxCup: Box<string> = {content : "45"} //in this partial pick and omit avialable


//real world use api res , form state

interface ApiPRomise<T> {
    status : number,
    data : T
}

const res: ApiPRomise<{flavor : string}> = {
    status : 200,
    data : {flavor : 'masala'}

}