
import axios from './custumize_axios'

type dataType=  {
    id: string;
    name: string;
    address: string;
    openTime: string;
    closeTime:string;
    price: number;
    categoryId: string;
    wardId:string;
}

const fetchAllPlace = ()=> {
    return axios.get<dataType, any>(`api/Place`)
}


// const loginApi = (email:any , password:any )=>{
//     return axios.post<dataType, any>("/api/login",{email,password})
// }
export {fetchAllPlace}