
import axios from './custumize_axios'

type dataType=  {
    id: string;
    name: string;
}

const fetchAllCategory = ()=> {
    return axios.get<dataType, any>(`api/Categories`)
}


// const loginApi = (email:any , password:any )=>{
//     return axios.post<dataType, any>("/api/login",{email,password})
// }
export {fetchAllCategory}