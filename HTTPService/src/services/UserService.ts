import create from "./GenericService";

export interface User {
    id: number;
    name: string;
}

export default create("users");