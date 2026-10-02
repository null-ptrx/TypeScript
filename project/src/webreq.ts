// import axios, { AxiosResponse } from "axios"
//or 
import axios from "axios";
import type { AxiosResponse } from "axios";

axios.get('https://example.com')
.then(response => {
    console.log(response.data);
})

interface Todo {
    userId : number,
    id : number, 
    title : string,
    completed : boolean
}

const fetchData = async () =>{
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log('todo', response.data)
    } catch (error: any) {
        // console.log(error.message)

        if (axios.isAxiosError(error)) {
            console.log('axios errro', error.message);
            if(error.response) {
                console.log(error.response.status)
            }
        }
    }
}


