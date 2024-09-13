import request from "@/utils/request";
import type {HosPitalDetail} from "./type"
 
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/'
}

//获取医院详情的接口
export const reqHospitalDetail = (hoscode:string)=>request<any,HosPitalDetail>({
    url:API.HOSPITALDETAIL_URL + hoscode,
    method:'get'
})
export const reqHospitalDepartment = (hoscode:string)=>request<any>({
    url:API.HOSPITALDEPARTMENT_URL + hoscode,
    method:'get'
})