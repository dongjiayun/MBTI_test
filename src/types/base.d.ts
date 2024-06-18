import type { AxiosResponse } from 'axios'

declare  interface ResponseData extends AxiosResponse {
    message: string;
    status: number;
    data: any;
}

declare  interface ResponseType {
    checkMobile?:boolean
}

declare  interface Dict{
    label:string,
    value:string|number
}

declare type Dicts = Array<Dict>

declare interface Param {
    [key: string]: any
}
