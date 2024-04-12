
import axios from './custumize_axios'

type dataType=  {
    data:[],
    total: number,
    total_pages: number,
    page: number,
    token: string 
}

const fetchAllUser = (page:number )=> {
    return axios.get<dataType, any>(`api/users?page=${page}`)
}
    
const loginApi = (email:any , password:any )=>{
    return axios.post<dataType, any>("/api/login",{email,password})
}
export {fetchAllUser, loginApi}