
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

export {fetchAllWard}