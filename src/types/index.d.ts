export interface DevicesFace {
    _id: string;
    region: RegionFace;
    lat: number;
    long: number;
    serie: string;
    name: string ;
    device_privet_key: string;
    date: number;
    owner: UserFace;
    created_at: string;
    updated_at: string;
}
export interface ResponseData <T>{
    total : number;
    offset : number;
    limit : number;
    data : T[];
}
export interface DevicesFaceOpt {
    _id?: string;
    region?: string;
    lat?: number;
    long?: number;
    serie?: string;
    name?: string ;
    device_privet_key?: string;
    date?: number;
    owner?: string;
    created_at?: string;
    updated_at?: string;
}

export interface UserFace {
    fullname: string;
    role: string;
}
export interface UserFaceOpt {
    _id?: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    role?: string;
    region?: string;
    created_at?: string;
    updated_at?: string;
}
export interface RegionFace {
    _id: string;
    name: string;
    devicesCount: number;
}
export interface FlowFace {
    _id: string;
    level: number;
    avg_level: number;
    serie: string;
    name: string;
    created_at: string;
}
export interface EventFaceHandelExel {
    [key: string]: string | number | boolean;
    _id: string;
    level: number;
    pressure: number;
    volume: number;
    signal: 'good' | 'nosignal';
    date_in_ms: number;
    serie : string ;
    name: string ;
}
export interface ServerdataFace {
    [key: string]: string | number | boolean;
    _id: string;
    device_privet_key: string;
    basedata: string;
    message: string;
    send_data_in_ms: number;
    status_code: number;
    created_at: string;
    updated_at: string;
}
