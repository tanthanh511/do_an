
import axios from './custumize_axios'

type dataType=  {
    id: string;
    ward: string;
    description: string;
    contact: string;
}

const fetchAllWard = ()=> {
    return axios.get<dataType, any>(`api/Wards`)
}


// const loginApi = (email:any , password:any )=>{
//     return axios.post<dataType, any>("/api/login",{email,password})
// }
export {fetchAllWard}