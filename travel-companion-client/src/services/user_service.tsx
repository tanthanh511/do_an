
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

const fetchUser = ()=>{
    return axios.get<dataType, any>("/api/Accounts")
}

const loginApi = (email:string , password:string )=>{
    return axios.get<dataType, any>(`/api/Accounts/${email}/${password}`)
}

const registerApi = (email: string, username: string, password: string, bio: string)=>{
    return axios.post<dataType, any>("/api/Accounts", {email, username, password, bio})     
}
export {fetchAllUser, loginApi, registerApi}