import apiClient from "./api-client"

interface Entity {
    id: number;
    name: string;
}

class GenericService {
    endpoint:string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get = <T>()=> {
        const abortController = new AbortController();
        const request =   apiClient
        .get<T[]>(this.endpoint, {
            signal: abortController.signal,
        });

        const cancel = ()=>(abortController.abort());

        return {request, cancel};
    }

    delete = (id: number)=> {
        return  apiClient.delete(this.endpoint + "/"+ id);
    }

    create = <T>(obj: T)=> {
        return apiClient.post(this.endpoint, obj);
    }

    update = <T extends Entity>(obj: T) => {
        const updatedUser = { ...obj, name: obj.name + "!" };
        return apiClient.patch(this.endpoint+ "/" + obj.id, updatedUser);
    }
}

const create = (endpoint:string)=> {return new GenericService(endpoint)};
export default create;